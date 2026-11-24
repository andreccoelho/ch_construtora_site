# Deploy Hostgator por FTPS

Publica o site em `chgrupo.com.br` por FTP com TLS (FTPS explícito, porta 21). Não usa SSH (shell desabilitado na conta).

## 1. Preparar o `.env.deploy`

1. Copie `.env.deploy.example` para `.env.deploy` (o arquivo real fica fora do git).
2. Preencha:
   - `FTP_HOST=sh00148.hostgator.com.br`
   - `FTP_PORT=21`
   - `FTP_USER=deploy@chgrupo.com.br` (a raiz dessa conta FTP já é a `public_html`)
   - `FTP_PASSWORD=` com a senha da conta FTP. Nunca cole a senha em chat, commit ou documento.
3. Confirme: `git check-ignore .env.deploy` deve imprimir o nome do arquivo.

## 2. Comandos

Rode `npm run build` antes de publicar. Todos aceitam `--dry-run` no fim (`npm run deploy:hotfix -- --dry-run`).

| Comando | O que faz |
| --- | --- |
| `npm run deploy:check` | Lista a raiz e `imagens/projetos/` (3 níveis), aponta pastas fora de 755 e arquivos fora de 644 e mostra os `.htaccess` (sem alterar). |
| `npm run deploy:perms -- imagens/projetos` | Aplica 755 em pastas e 644 em arquivos, recursivo, dentro da pasta indicada. |
| `npm run deploy:hotfix` | Baixa o backup dos 6 arquivos atuais para `backups/servidor_AAAAMMDD_HHMM/` e envia os 6 de `build/` (`bundle.js`, `bundle.js.LICENSE.txt`, `favicon.ico`, `index.html`, `site.webmanifest`, `style.css`). |
| `npm run deploy:compare` | Compara o SHA-256 do `bundle.js` do servidor com o de `build/`. |

Regras do script: usa sempre TLS (sem fallback para FTP puro), não apaga nada no servidor e não mexe no `.htaccess`.

## 3. Validar

- Imagens (devem dar 200):
  `curl -s -o /dev/null -w "%{http_code}\n" https://chgrupo.com.br/imagens/projetos/bothanica-park/lote-06/01.jpg`
- Bundle sem vazamento (deve dar 0):
  `curl -s "https://chgrupo.com.br/bundle.js?v=teste" | grep -c -e USERPROFILE -e USERNAME -e APPDATA -e COMPUTERNAME -e DB_PASSWORD -e sourceMappingURL`
- `npm run deploy:compare` deve responder `IGUAIS`.

## 4. Problemas comuns

- 403 em imagem nova: rode `deploy:perms` na pasta (upload pelo cPanel costuma criar pasta em 744).
- Falha de TLS: pare e avise. Não troque para FTP sem criptografia.
