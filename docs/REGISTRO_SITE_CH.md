# Registro: Site CH (CH Arquitetura & Engenharia)

Data: 2026-11-24 · Desenvolvimento: IAZAN

## P01 · correção de premissa

- O P01 tratou este repositório como "Central CH". Isso estava errado: `ch_construtora_site` é só o site institucional (React 18 + webpack, HashRouter), em produção em https://chgrupo.com.br.
- Produção é a Hostgator via cPanel, com deploy manual (zip do conteúdo de `build/` extraído na `public_html`). O VPS com Docker/nginx/Cloudflare Tunnel (`ch-construtora.mlutegar.com`) é ambiente secundário/teste.
- App Android/iOS, lojas e Central CH estão fora do escopo deste repositório.
- Só existe a branch `main`. A `wfx-docs` foi apagada sem merge de propósito; não recuperar o commit `3fdee86`.
- Arquivos renomeados: `docs/CONTEXTO_CENTRAL_CH.md` para `docs/CONTEXTO_SITE_CH.md` e `docs/REGISTRO_CENTRAL_CH.md` para `docs/REGISTRO_SITE_CH.md`.

## P02 · Contexto corrigido e verificação de produção

Somente leitura: nenhum código, config ou dependência alterado; sem build, deploy ou commit. Cópia temporária do bundle apagada ao final.

### Vazamento de process.env: CONFIRMADO

- `https://chgrupo.com.br/bundle.js` (HTTP 200, 1,8 MB) é byte a byte igual ao `build/bundle.js` local. O objeto `process.env` completo da máquina de build (Windows) está embutido, repetido 13 vezes no bundle.
- Só nomes, nunca valores. Identificação da máquina e do usuário: `USERPROFILE`, `USERNAME`, `APPDATA`, `LOCALAPPDATA`, `COMPUTERNAME`, `USERDOMAIN`, `USERDOMAIN_ROAMINGPROFILE`, `LOGONSERVER`, `HOME`, `HOMEDRIVE`, `HOMEPATH`, `ONEDRIVE`, `ONEDRIVECOMMERCIAL`, `ONEDRIVECONSUMER`, `PATH`, `PSMODULEPATH`, `PWD`, `TEMP`, `TMP`.
- Nomes com cara de segredo (existem como chave; se há valor real não foi verificado de propósito): `DB_PASSWORD`, `GEMINI_API_KEY`, `OPENAI_API_KEY`, `OPENAI_API_BASE`.
- Outras: `AIDER_MODEL`, `AI_AGENT`, `CLAUDECODE`, `CLAUDE_AGENT_SDK_VERSION`, `CLAUDE_CODE_ENTRYPOINT`, `CLAUDE_CODE_EXECPATH`, `CLAUDE_CODE_SESSION_ID`, `CLAUDE_EFFORT`, `HERMES_GIT_BASH_PATH`, `HERMES_HOME`, `PT8HOME`, `PYCHARM`, `WEBSTORM`, `CHOCOLATEYINSTALL`, `CHOCOLATEYLASTPATHUPDATE`, `COREPACK_ENABLE_AUTO_PIN`, `EDITOR`, `GIT_EDITOR`, `EXEPATH`, `INIT_CWD`, `HOST_PORT`, `PLINK_PROTOCOL`, `VBOX_MSI_INSTALL_PATH`, `FPS_BROWSER_APP_PROFILE_STRING`, `FPS_BROWSER_USER_PROFILE_STRING`, `DRIVERDATA`, `SESSIONNAME`, `SHELL`, `SHLVL`, `MSYSTEM`, `NODE`, `COLOR`, `TERM`, `OS`, `PROMPT`, `PUBLIC`, `_`, seis variáveis `EFC_10876_*`, além das padrão do Windows (`ALLUSERSPROFILE`, `COMSPEC`, `PROGRAMFILES`, `PROGRAMDATA`, `SYSTEMROOT`, `WINDIR`, `NUMBER_OF_PROCESSORS`, `PROCESSOR_*` etc.).
- Não encontrados: `TOKEN`, `FTP_*`, `SSH_*`, `GITHUB*`, `NPM_*` como nome de variável. `FTP_USER`/`FTP_PASSWORD` do `deploy.js` não estavam no ambiente do build.
- Source map inline em produção: SIM. O `bundle.js` contém `sourceMappingURL=data:application/json;charset=utf-8;base64,...` (`devtool: 'inline-source-map'` em `webpack.config.js`), expondo o código-fonte.
- Origem: `webpack.config.js`, `DefinePlugin({"process.env": JSON.stringify(process.env)})`.

### 403 em imagens (GET em 2026-11-24)

| URL | HTTP |
|---|---|
| `/imagens/projetos/bothanica-park/lote-06/01.jpg` | 403 |
| `/imagens/projetos/villa-blanca-iv/lote-13/01.jpg` | 403 |
| `/imagens/projetos/villa-blanca-iv/lote-22/01.jpg` | 403 |
| `/imagens/projetos/Projeto-Fabio-e-Raniele/Fachada/f_1---Photo.jpg` | 403 |
| `/imagens/vilablancaI.png` (controle, fora de `projetos`) | 200 |

Caminhos tirados de `src/data/casas.js`. O 403 persiste em toda a pasta `imagens/projetos/`, enquanto o resto de `imagens/` responde 200: é a permissão 700 da pasta no servidor. Correção no cPanel: 755 em pastas e 644 em arquivos (recursivo em `imagens/projetos`).

## P03 · Hotfix do vazamento

Commit `f5770ab` na `main` (sem push, sem deploy), só `webpack.config.js`. O `package.json` não mudou: `"build": "webpack --mode production"` já usava o modo de produção.

- Usos de `process.env` no código: apenas `process.env.PUBLIC_URL` em `src/pages/Fotos.jsx:16`. `webpack.config.js` só o usava no `DefinePlugin`. `NODE_ENV` é definido pelo próprio webpack a partir de `--mode`.
- `webpack.config.js`: o config virou função `(env, argv) => ({...})`; `devtool` é `'inline-source-map'` só com `--mode development` e `false` nos demais; removido `"process.env": JSON.stringify(process.env)` do `DefinePlugin`, mantido só `"process.env.PUBLIC_URL"`.
- Observação: `PUBLIC_URL` continua vindo de `package.homepage` (resquício do template, `ibmec-tec.github.io/...`). Só afeta `Fotos.jsx` (rota `/fotos`).
- Tamanho do `build/bundle.js`: 1.828.240 bytes antes, 344.662 bytes depois.
- Grep no bundle novo (USERPROFILE, USERNAME, APPDATA, COMPUTERNAME, ONEDRIVE, DB_PASSWORD, GEMINI_API_KEY, OPENAI_API_KEY, OPENAI_API_BASE, CLAUDECODE, `PATH=`, sourceMappingURL): 0 ocorrências em todos.
- Histórico do git: `git log --all -- '*bundle.js' 'build/*' 'deploy_hostgator/*'` não retornou commits. Nenhum bundle foi versionado.
- Remoto: `origin` = https://github.com/andreccoelho/ch_construtora_site. A URL responde HTTP 200 sem login, ou seja, o repositório é público. Como nada vazado foi commitado, o vazamento ficou só no bundle em produção.
- `site_hotfix.zip` (raiz, 103.634 bytes, ignorado pelo git por `*.zip`), 6 arquivos na raiz do zip, sem pasta por fora: `bundle.js` (344.662), `bundle.js.LICENSE.txt` (1.802), `favicon.ico` (34.494), `index.html` (1.934), `site.webmanifest` (451), `style.css` (1.503). Sem `imagens/`.
- Ainda contêm o bundle vazado (não apagados, aguardando decisão): `deploy_hostgator/` (`bundle.js` de 11/11 com 1.719.020 bytes, `deploy_hostgator.zip` com 150 MB, mais cópia do build e `imagens/`) e `site_cpanel.zip` na raiz (150.224.510 bytes).
- Falta: subir `site_hotfix.zip` na `public_html` pelo cPanel (sobrescrevendo) e conferir por curl que o `bundle.js` público não tem mais as variáveis. As chaves precisam estar revogadas por fora.

## Próximos prompts sugeridos (só site)

1. **P04 · Validar o hotfix em produção.** Após o upload, curl no `bundle.js` público (grep dos nomes, sem valores) e limpeza de `deploy_hostgator/` e `site_cpanel.zip` se autorizado.
2. **P05 · Corrigir o 403 de `imagens/projetos`.** Aplicar 755/644 no cPanel e validar por curl; documentar a checagem de permissões no passo de deploy.
3. **P06 · Versionar e limpar o repositório.** Commitar Docker/nginx/compose (secundário), remover `tmpclaude-*`, dependências sem uso (`firebase`, `gh-pages`) e código do template.
4. **P07 · Deploy Hostgator documentado.** Oficializar o fluxo manual (build, zip, cPanel, `public_html`), remover `deploy.js`/`deploy-alt.js` quebrados e criar `.htaccess` com cache e headers.
5. **P08 · SEO e performance.** BrowserRouter (com fallback no `.htaccess`), robots, sitemap, og:image, imagens em WebP com lazy loading.
6. **P09 · Correção do menu mobile.** Reproduzir e corrigir o bug de `Header.jsx` (relato em `Script.md`).
7. **P10 · Privacidade e LGPD.** Política de privacidade e centralização de WhatsApp e e-mail em um único arquivo.

## P05 · Acesso SSH configurado (parcial: shell não habilitado)

- Data: 2026-11-24
- Alias: `ch-hostgator`
- Host: `sh00148.hostgator.com.br`, porta 2222
- Autenticação: chave ed25519 sem senha, importada e autorizada no cPanel
- Raiz do site esperada: `/home1/ryanma76/public_html` (domínio primário `chgrupo.com.br`, sem addons nem subdomínios). Não verificada por SSH.
- Resultado do teste: a chave foi aceita ("Authenticated ... using publickey"), mas o servidor respondeu "Shell access is not enabled on your account!". Nenhum comando remoto executou.
- Pendência: pedir à Hostgator (suporte) a habilitação do acesso shell na conta. Depois repetir o teste (`ssh ch-hostgator "whoami; pwd; ls -la public_html | head -30"`).

## P06 · Deploy FTPS, 403 e hotfix

Data: 2026-11-24. Conta FTP `deploy@chgrupo.com.br`, raiz = `public_html`. Deploy por FTPS explícito (`scripts/ftp.mjs`, ver `docs/DEPLOY_HOSTGATOR.md`).

- Build local conferido antes: `build/bundle.js` com 344.662 bytes e 0 ocorrências no grep do P03 (12 nomes).
- Permissões erradas: 3 pastas de `imagens/projetos/` (`bothanica-park`, `Projeto-Fabio-e-Raniele`, `villa-blanca-iv`) e a própria `imagens/projetos` estavam em 744 (4 pastas). Arquivos fora de 644: só `.ftpquota` (600, do sistema, ignorado). Corrigido com `deploy:perms`: 14 pastas para 755 e 161 arquivos para 644, 175 ok e 0 falhas.
- `.htaccess`: existe só na raiz (450 bytes, 644), com regras de rewrite do React e proteção de `.well-known`. Não bloqueia nada. Não existe em `imagens/` nem em `imagens/projetos/`. Nada alterado.
- Hotfix: o SHA-256 do `bundle.js` do servidor era diferente do local (servidor ainda com a versão vazada). Enviados os 6 arquivos de `build/`. Backup dos originais em `backups/servidor_20261124_1536/` (fora do git). Depois, `deploy:compare` deu IGUAIS.
- Validação externa: as 4 URLs de `imagens/projetos` deram 200 (antes: 403); `/` deu 200; `bundle.js?v=p06` com 344.662 bytes e 0 ocorrências no grep.
- Bug corrigido no script durante o uso: `client.site` não existe no basic-ftp, trocado por `client.send("SITE CHMOD ...")`.
- **Pendência: trocar a senha da conta FTP `deploy@chgrupo.com.br`.** A senha apareceu no chat. Após trocar, atualizar o `.env.deploy`.
- Pendência: as chaves da máquina de build que estavam no bundle antigo seguem precisando de revogação por fora (ver P03).
- Aguardando decisão: apagar `deploy.js`, `deploy-alt.js` e `README-DEPLOY.md` (deploy FTP antigo e quebrado).
