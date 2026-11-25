// Deploy por FTPS explicito (TLS) para a Hostgator.
// Uso: node scripts/ftp.mjs --check | --perms <pasta> | --hotfix | --compare | --full  [--dry-run]
// A senha vem so de .env.deploy (FTP_PASSWORD). Nunca e impressa nem logada.
import { Client } from 'basic-ftp';
import dotenv from 'dotenv';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
dotenv.config({ path: path.join(ROOT, '.env.deploy'), quiet: true });

const HOTFIX_FILES = [
  'bundle.js',
  'bundle.js.LICENSE.txt',
  'favicon.ico',
  'index.html',
  'site.webmanifest',
  'style.css',
];

const args = process.argv.slice(2);
const DRY = args.includes('--dry-run');
const mode = args.find((a) => ['--check', '--perms', '--hotfix', '--compare', '--full'].includes(a));

function fail(msg) {
  console.error(`ERRO: ${msg}`);
  process.exit(1);
}

function stamp() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}_${p(d.getHours())}${p(d.getMinutes())}`;
}

function sha256(file) {
  return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
}

async function connect() {
  const { FTP_HOST, FTP_PORT, FTP_USER, FTP_PASSWORD } = process.env;
  if (!FTP_HOST || !FTP_USER || !FTP_PASSWORD) {
    fail('preencha FTP_HOST, FTP_USER e FTP_PASSWORD em .env.deploy');
  }
  const client = new Client(30000);
  try {
    // secure: true = FTPS explicito (AUTH TLS). Sem fallback para FTP puro.
    await client.access({
      host: FTP_HOST,
      port: Number(FTP_PORT || 21),
      user: FTP_USER,
      password: FTP_PASSWORD,
      secure: true,
    });
  } catch (e) {
    client.close();
    fail(`falha ao conectar com TLS (${e.code || e.message}). Nao ha fallback para FTP sem criptografia.`);
  }
  return client;
}

// Converte as permissoes que o servidor informou em "755". Retorna null se nao informou.
function modeOf(info) {
  const p = info.permissions;
  if (p && p.user !== undefined) return `${p.user}${p.group}${p.world}`;
  if (info.unixPermissions !== undefined) return info.unixPermissions.toString(8).slice(-3);
  return null;
}

async function walk(client, dir, maxDepth, depth = 1, out = []) {
  const items = await client.list(dir);
  for (const it of items) {
    if (it.name === '.' || it.name === '..') continue;
    const full = `${dir === '.' ? '' : `${dir}/`}${it.name}`;
    const isDir = it.isDirectory;
    out.push({ path: full, isDir, mode: modeOf(it), size: it.size });
    if (isDir && depth < maxDepth) await walk(client, full, maxDepth, depth + 1, out);
  }
  return out;
}

async function walkAll(client, dir, out = []) {
  const items = await client.list(dir);
  for (const it of items) {
    if (it.name === '.' || it.name === '..') continue;
    const full = `${dir}/${it.name}`;
    out.push({ path: full, isDir: it.isDirectory });
    if (it.isDirectory) await walkAll(client, full, out);
  }
  return out;
}

async function cmdCheck(client) {
  const seen = new Map();
  for (const start of ['.', 'imagens/projetos']) {
    const items = await walk(client, start, 3);
    for (const i of items) seen.set(i.path.replace(/^\.\//, ''), i);
  }
  const all = [...seen.values()];
  const noMode = all.filter((i) => i.mode === null).length;
  const badDirs = all.filter((i) => i.isDir && i.mode !== null && i.mode !== '755');
  const badFiles = all.filter((i) => !i.isDir && i.mode !== null && i.mode !== '644');

  console.log('\n== Raiz (nivel 1) ==');
  for (const i of all.filter((x) => !x.path.includes('/'))) {
    console.log(`${i.mode ?? '???'}  ${i.isDir ? 'd' : '-'}  ${i.path}`);
  }
  console.log(`\nItens vistos: ${all.length} (sem info de permissao: ${noMode})`);
  console.log(`\nPastas fora de 755: ${badDirs.length}`);
  badDirs.forEach((i) => console.log(`  ${i.mode}  ${i.path}`));
  console.log(`Arquivos fora de 644: ${badFiles.length}`);
  badFiles.slice(0, 60).forEach((i) => console.log(`  ${i.mode}  ${i.path}`));
  if (badFiles.length > 60) console.log(`  ... mais ${badFiles.length - 60}`);

  console.log('\n== .htaccess ==');
  for (const dir of ['.', 'imagens', 'imagens/projetos']) {
    const items = await client.list(dir).catch(() => []);
    const ht = items.find((i) => i.name === '.htaccess');
    console.log(`${dir}/.htaccess: ${ht ? `existe (${ht.size} bytes, modo ${modeOf(ht) ?? '???'})` : 'nao existe'}`);
    if (ht) {
      const tmp = path.join(ROOT, 'backups', `.tmp_htaccess_${dir.replace(/\W/g, '_')}`);
      fs.mkdirSync(path.dirname(tmp), { recursive: true });
      await client.downloadTo(tmp, `${dir}/.htaccess`);
      console.log('--- conteudo ---');
      console.log(fs.readFileSync(tmp, 'utf8'));
      console.log('--- fim ---');
      fs.unlinkSync(tmp);
    }
  }
}

async function cmdPerms(client) {
  const idx = args.indexOf('--perms');
  const dir = args[idx + 1];
  if (!dir || dir.startsWith('--')) fail('informe a pasta: --perms imagens/projetos');
  const clean = dir.replace(/\\/g, '/').replace(/^\/+|\/+$/g, '');
  if (!clean || clean.split('/').includes('..') || clean === '.') fail('pasta invalida');
  const items = await walkAll(client, clean);
  const dirs = [clean, ...items.filter((i) => i.isDir).map((i) => i.path)];
  const files = items.filter((i) => !i.isDir).map((i) => i.path);
  console.log(`${DRY ? '[dry-run] ' : ''}${dirs.length} pastas -> 755, ${files.length} arquivos -> 644 em ${clean}`);
  if (DRY) return;
  let ok = 0;
  let err = 0;
  for (const d of dirs) {
    try { await client.send(`SITE CHMOD 755 ${d}`); ok++; } catch (e) { err++; console.error(`falhou: ${d} (${e.message})`); }
  }
  for (const f of files) {
    try { await client.send(`SITE CHMOD 644 ${f}`); ok++; } catch (e) { err++; console.error(`falhou: ${f} (${e.message})`); }
  }
  console.log(`CHMOD concluido: ${ok} ok, ${err} falhas`);
}

async function backupRemote(client, names, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  const root = await client.list('.');
  for (const n of names) {
    if (!root.find((i) => i.name === n)) {
      console.log(`  (nao existe no servidor, sem backup) ${n}`);
      continue;
    }
    await client.downloadTo(path.join(destDir, n), n);
    console.log(`  backup: ${n}`);
  }
}

async function cmdHotfix(client) {
  const build = path.join(ROOT, 'build');
  for (const f of HOTFIX_FILES) {
    if (!fs.existsSync(path.join(build, f))) fail(`build/${f} nao existe. Rode npm run build antes.`);
  }
  const dest = path.join(ROOT, 'backups', `servidor_${stamp()}`);
  console.log(`${DRY ? '[dry-run] ' : ''}backup em ${path.relative(ROOT, dest)}`);
  if (!DRY) await backupRemote(client, HOTFIX_FILES, dest);
  for (const f of HOTFIX_FILES) {
    const local = path.join(build, f);
    console.log(`${DRY ? '[dry-run] ' : ''}enviar ${f} (${fs.statSync(local).size} bytes)`);
    if (!DRY) await client.uploadFrom(local, f);
  }
  if (!DRY) console.log('hotfix enviado');
}

async function cmdCompare(client) {
  const tmp = path.join(ROOT, 'backups', '.tmp_compare_bundle.js');
  fs.mkdirSync(path.dirname(tmp), { recursive: true });
  await client.downloadTo(tmp, 'bundle.js');
  const remote = sha256(tmp);
  fs.unlinkSync(tmp);
  const local = sha256(path.join(ROOT, 'build', 'bundle.js'));
  console.log(`servidor: ${remote}`);
  console.log(`local:    ${local}`);
  console.log(remote === local ? 'IGUAIS' : 'DIFERENTES');
}

const IMG_EXT = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.svg']);

function walkLocal(dir, rel = '', out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const r = rel ? `${rel}/${e.name}` : e.name;
    if (e.isDirectory()) walkLocal(path.join(dir, e.name), r, out);
    else out.push({ rel: r, abs: path.join(dir, e.name), size: fs.statSync(path.join(dir, e.name)).size });
  }
  return out;
}

// Envia build/ inteiro: so o que falta no servidor ou tem tamanho diferente.
// Nunca apaga nada no servidor e nunca toca em .htaccess.
async function cmdFull(client) {
  const build = path.join(ROOT, 'build');
  if (!fs.existsSync(path.join(build, 'bundle.js'))) fail('build/bundle.js nao existe. Rode npm run build antes.');
  const home = await client.pwd();
  const local = walkLocal(build).filter((f) => path.basename(f.rel) !== '.htaccess');

  // Lista cada pasta remota uma unica vez.
  const remoteCache = new Map();
  async function remoteSizes(dir) {
    if (!remoteCache.has(dir)) {
      const items = await client.list(dir === '' ? '.' : dir).catch(() => null);
      remoteCache.set(dir, items ? new Map(items.map((i) => [i.name, i])) : null);
    }
    return remoteCache.get(dir);
  }

  const plan = [];
  for (const f of local) {
    const dir = path.posix.dirname(f.rel) === '.' ? '' : path.posix.dirname(f.rel);
    const entries = await remoteSizes(dir);
    const r = entries?.get(path.posix.basename(f.rel));
    if (!r) plan.push({ ...f, dir, reason: 'novo' });
    else if (r.size !== f.size) plan.push({ ...f, dir, reason: 'tamanho' });
  }
  const total = plan.reduce((a, f) => a + f.size, 0);
  console.log(`${DRY ? '[dry-run] ' : ''}build local: ${local.length} arquivos | a enviar: ${plan.length} (${total} bytes)`);
  plan.slice(0, 30).forEach((f) => console.log(`  ${f.reason === 'novo' ? '+' : '~'} ${f.rel} (${f.size})`));
  if (plan.length > 30) console.log(`  ... mais ${plan.length - 30}`);
  if (DRY || plan.length === 0) return;

  const dest = path.join(ROOT, 'backups', `servidor_${stamp()}`);
  const toBackup = plan.filter((f) => f.reason === 'tamanho' && !IMG_EXT.has(path.extname(f.rel).toLowerCase()));
  for (const f of toBackup) {
    const out = path.join(dest, ...f.rel.split('/'));
    fs.mkdirSync(path.dirname(out), { recursive: true });
    await client.downloadTo(out, f.rel);
    console.log(`  backup: ${f.rel}`);
  }

  const madeDirs = new Set();
  let up = 0;
  let err = 0;
  for (const f of plan) {
    try {
      if (f.dir && remoteCache.get(f.dir) === null && !madeDirs.has(f.dir)) {
        await client.ensureDir(f.dir);
        await client.cd(home);
        const parts = f.dir.split('/');
        for (let i = 1; i <= parts.length; i++) madeDirs.add(parts.slice(0, i).join('/'));
      }
      await client.uploadFrom(f.abs, f.rel);
      await client.send(`SITE CHMOD 644 ${f.rel}`).catch(() => {});
      up++;
    } catch (e) {
      err++;
      console.error(`falhou: ${f.rel} (${e.message})`);
    }
  }
  for (const d of madeDirs) await client.send(`SITE CHMOD 755 ${d}`).catch(() => {});
  console.log(`enviados: ${up}, falhas: ${err}, pastas novas: ${madeDirs.size}, backups: ${toBackup.length}`);
  if (err) process.exitCode = 1;
}

if (!mode) fail('use --check, --perms <pasta>, --hotfix, --compare ou --full (opcional --dry-run)');

const client = await connect();
try {
  if (mode === '--check') await cmdCheck(client);
  else if (mode === '--perms') await cmdPerms(client);
  else if (mode === '--hotfix') await cmdHotfix(client);
  else if (mode === '--compare') await cmdCompare(client);
  else if (mode === '--full') await cmdFull(client);
} catch (e) {
  console.error(`ERRO: ${e.message}`);
  process.exitCode = 1;
} finally {
  client.close();
}
