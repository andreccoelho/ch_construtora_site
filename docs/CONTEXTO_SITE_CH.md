# Contexto: Site CH (CH Arquitetura & Engenharia)

Data do mapeamento: 2026-11-24 (corrigido no P02). Modo somente leitura. Nenhum build, teste ou deploy foi executado.

Este repositório é o site institucional da CH Arquitetura & Engenharia (produção em https://chgrupo.com.br). Não há app nem Central CH aqui.

## 1. Visão geral

- O que faz: apresenta a CH Arquitetura & Engenharia (antes CH Construtora), casas de alto padrão no Recreio dos Bandeirantes (RJ). Mostra condomínios, projetos vendidos, "Casas à venda" (voltada a corretores), obras, equipe, sobre e contato via WhatsApp e e-mail (`src/components/Footer/Footer.jsx`).
- Para quem: visitantes e corretores. Perfis de usuário autenticados: não encontrados (`src/pages/Login.jsx` e `Protegida.jsx` são stubs vazios).
- Marca no código: "CH Arquitetura & Engenharia" em `public/index.html`; razão social "CH CONSTRUTORA LTDA" mantida no rodapé (commit `6ce0538`).

## 2. Stack

| Camada | Tecnologia (`package.json`) |
|---|---|
| Frontend | React 18.2.0, react-dom 18.2.0, react-router-dom 6.20.0 (`HashRouter`), styled-components 6.1.1 |
| Build | webpack 5.89.0, webpack-cli 5.1.4, webpack-dev-server 4.15.1, babel-loader 9.1.3, @babel/preset-env e preset-react 7.23.3, copy-webpack-plugin 11.0.0 |
| Backend | não encontrado |
| Banco | não encontrado |
| Auth | não encontrado |
| Storage | imagens locais em `public/imagens` (versionadas no git) |
| Hospedagem (produção) | Hostgator via cPanel em https://chgrupo.com.br. Deploy manual: build, zip do conteúdo de `build/` (`site_cpanel.zip`), upload no Gerenciador de Arquivos e extração na `public_html` |
| Ambiente secundário/teste | VPS com Docker + nginx atrás de Cloudflare Tunnel (`ch-construtora.mlutegar.com`), não é a produção da cliente (`obsidian-ch_construtora_site/`) |
| Libs sobrando | `firebase` 10.6.0 (sem uso), `gh-pages` 6.1.1 (resquício do template) |

O pacote se chama `um-react`, autor `@EduardoMangeli`, e `homepage` aponta para `ibmec-tec.github.io/react-base-github-pages`: sobras do template didático.

## 3. Arquitetura

Só web estático, sem backend. Existe `public/site.webmanifest` (incompleto: `name` e `short_name` vazios, sem service worker).

Produção:

```
Navegador -> chgrupo.com.br (Hostgator, public_html via cPanel)
          -> index.html + bundle.js (SPA, HashRouter)
          -> dados em src/data/casas.js (estático, embutido no bundle)
          -> imagens /imagens/** (servidas pela Hostgator)

Secundário (teste): Navegador -> Cloudflare Tunnel -> nginx:alpine (container, 127.0.0.1:3004) no VPS.

Links externos: api.whatsapp.com, mailto, Google Fonts
```

Não há chamada de API nas telas principais. `src/services/AtletasBotafogo.js` chama `https://botafogo-atletas.mange.li` (resquício do template, usado pela rota `/atletas`).

## 4. Mapa de pastas

| Pasta/arquivo | Função |
|---|---|
| `src/index.js` | entrada e rotas |
| `src/pages/` | telas (Home, Sobre, Obras, AVenda, Condominio, Fotos, Atletas, Contato, Login/Logout/Protegida stubs, SagradaFamilia, VillaBlancaI/II) |
| `src/components/` | Header, Footer, Banner*, CasasLista, CasasAVendaHome, NossaEquipe, ContatoSessao, WhatsAppOverlay etc. |
| `src/data/casas.js` | fonte única de condomínios e casas (status `vendido` / `a-venda`) |
| `src/data/computadores.json`, `src/components/AtletaCard`, `src/services` | resquícios do template (código morto) |
| `src/config/Firebase.js` | arquivo vazio |
| `public/` | HTML, CSS, manifest e cerca de 144 MB de imagens |
| `build/` | saída do webpack (gitignored, 146 MB) |
| `deploy_hostgator/` | cópia do build + zip, **não versionada**, 289 MB |
| `Dockerfile`, `nginx.conf`, `docker-compose.yml`, `.dockerignore` | deploy atual, **não versionados** (untracked) |
| `deploy.js`, `deploy-alt.js`, `README-DEPLOY.md` | deploy FTP legado |
| `obsidian-ch_construtora_site/` | notas do projeto (Painel, Deploy, Portas, Cloudflare, Imagens), untracked |
| `site_cpanel.zip` | 143 MB na raiz, ignorado pelo git |

## 5. Modelo de dados

Não há tabelas, coleções, RLS ou equivalente. Os dados são objetos JS em `src/data/casas.js`: `CONDOMINIOS` (título, imagem e descrição por slug, como villa-blanca-i, villa-blanca-ii, sagrada-familia) e a lista de casas com `status` (`STATUS.VENDIDO` ou `STATUS.A_VENDA`), com fotos montadas por `sequencia()` e `lista()`. Alterar o catálogo exige novo build e deploy.

## 6. Funcionalidades

| Módulo | Tela/rota | Status | Evidência |
|---|---|---|---|
| Home | `/` | pronto | `src/pages/Home.jsx`, `src/index.js` |
| Casas à venda na home | `/` | pronto | `src/components/CasasAVendaHome/CasasAVendaHome.jsx` |
| Casas à venda | `/a-venda`, `/a-venda/:slug` | pronto | `src/pages/AVenda.jsx`, `src/components/CasasLista/CasasLista.jsx` |
| Condomínios | `/condominios/:slug` | pronto | `src/pages/Condominio.jsx`, `src/components/CasasLista/CasasPorCondominio.jsx` |
| Obras | `/obras` | pronto | `src/pages/Obras.jsx` |
| Sobre e equipe | `/sobre` | pronto | `src/pages/Sobre.jsx`, `src/components/NossaEquipe` |
| Contato | sem rota (`Contato.jsx` não está em `src/index.js`) | parcial | `src/pages/Contato.jsx`; contato existe no rodapé e em `ContatoSessao` |
| Botão WhatsApp | global | pronto | `src/components/WhatsAppOverlay/WhatsAppOverlay.jsx` |
| Menu mobile | Header | quebrado (relato, não reproduzido) | `Script.md`; código em `src/components/Header/Header.jsx` |
| Fotos | `/fotos` | parcial/resquício | `src/pages/Fotos.jsx` |
| Atletas | `/atletas` | código morto com rota pública | `src/pages/Atletas.jsx`, `src/services/AtletasBotafogo.js` |
| Login, Logout, área protegida | nenhuma | faltando (stubs) | `src/pages/Login.jsx`, `src/pages/Protegida.jsx` |

## 7. Integrações externas

- WhatsApp: `https://api.whatsapp.com/send?phone=21970380708` em `CasasLista.jsx:411`, `ContatoSessao.jsx:50`, `Footer.jsx:25` e `WhatsAppOverlay.jsx:7`. Número sem DDI 55.
- E-mail: `mailto:construtorach.construtora@gmail.com` (`Footer.jsx:47`).
- Google Fonts (Jost) em `public/index.html`.
- API Botafogo (resquício): `src/services/AtletasBotafogo.js`.
- Push, pagamentos, webhooks e analytics: não encontrados.

## 8. Variáveis de ambiente

- `.env.example`: não encontrado. Nenhum `.env*` presente.
- O código do site não lê variáveis, exceto `PUBLIC_URL` (injetada em `webpack.config.js`). Não consta em `.env.example`.
- `deploy.js` lê `FTP_USER`, `FTP_PASSWORD`, `FTP_HOST`, `FTP_PORT` e `FTP_REMOTE_PATH` de `.env.deploy`. O `README-DEPLOY.md` cita `.env.deploy.example`, que **não existe**.
- **Risco**: `webpack.config.js` usa `DefinePlugin({"process.env": JSON.stringify(process.env)})`. Isso pode embutir **todas as variáveis de ambiente da máquina de build** no `bundle.js`. Se o build rodar em máquina ou CI com segredos, eles ficam públicos. **Confirmado no P02** no `build/bundle.js` local e no bundle de produção (ver `docs/REGISTRO_SITE_CH.md`).

## 9. Build e deploy

- Produção: https://chgrupo.com.br na Hostgator. Deploy manual: gerar o build, zipar o conteúdo de `build/` (`site_cpanel.zip`), subir pelo Gerenciador de Arquivos do cPanel e extrair na `public_html`. Pastas devem ter permissão 755 e arquivos 644 (incidente de 19/11 em `imagens/projetos/`, ver seção 11).
- VPS (secundário/teste): `Dockerfile` (node:20-alpine builda, nginx:alpine serve) e `docker-compose.yml` expondo `127.0.0.1:3004:80`, container `ch-construtora-site` em `/root/ch_construtora_site/`, hostname `ch-construtora.mlutegar.com` via Cloudflare Tunnel (`obsidian-ch_construtora_site/1-Deploy/Deploy.md`). O Dockerfile reescreve `homepage` para `/`.
- `deploy.js` e `deploy-alt.js` (FTP legado): os pacotes `ftp-deploy` e `dotenv` **não estão no `package.json`** e o script `deploy-hostgator` citado no README **não existe**. Vai falhar; o deploy real é manual pelo cPanel.
- Ícones web existem em `public/imagens/icons`, mas `public/index.html` usa `logo.svg` como favicon e apple-touch-icon.
- Sem `engines` no `package.json`; sem CI/CD (`.github`: não encontrado).

## 10. Prontidão para produção

- [ ] Conferir permissões no cPanel (755 pastas, 644 arquivos) após cada extração
- [ ] Versionar Dockerfile, nginx.conf, docker-compose e .dockerignore (estão untracked)
- [ ] Trocar `HashRouter` por `BrowserRouter` (URLs com `#/` prejudicam SEO e compartilhamento; o nginx já tem fallback SPA)
- [ ] Corrigir o `DefinePlugin` de `process.env` e o `devtool: 'inline-source-map'`, que vale também para `--mode production` (`webpack.config.js`) e expõe o código-fonte
- [ ] Otimizar imagens (144 MB; várias de 1 a 4 MB, como `lote45_1.jpg` com 3,8 MB), WebP e lazy loading
- [ ] og:image e favicon com URL absoluta, manifest com nome, `robots.txt` e `sitemap.xml` (não encontrados)
- [ ] Política de privacidade/LGPD: não encontrada. Não há formulário nem coleta própria, mas há links para WhatsApp e e-mail
- [ ] Headers de segurança e cache via `.htaccess` na Hostgator (não versionado)
- [ ] Corrigir menu mobile e remover rotas mortas (`/atletas`, `/fotos`)

Lojas de aplicativos: fora do escopo deste repositório.

## 11. Riscos e dívidas técnicas

- Incidente de 19/11: tudo em `imagens/projetos/` retornava 403 por permissão de pasta no servidor (700 em vez de 755). Correção indicada: 755 em pastas e 644 em arquivos. Em 24/11 ainda retornava 403 (ver registro). Alto.
- `process.env` inteiro possivelmente embutido no bundle (seção 8). Alto.
- `.claude/settings.local.json` permite `git push` sem confirmação e contém caminho de usuário pessoal. Médio.
- `.gitignore` bloqueia `.env*` e `*.zip` e tem a entrada `michel` (sem explicação). Mudança local pendente: `.orbita/`.
- 8 arquivos `tmpclaude-*-cwd` **versionados** no git (lixo).
- Arquivos pesados fora do git na raiz (`site_cpanel.zip` 143 MB, `deploy_hostgator/` 289 MB). O `tar` do Deploy.md exclui só node_modules, .git e build, então eles podem ir no pacote de deploy por engano.
- Imagens: já houve incidente de 404 por `public/imagens` ignorada (Deploy.md). Hoje versionadas, mas o repositório cresce cerca de 133 MB.
- Dependências antigas (webpack-dev-server 4, react-router 6.20, firebase 10.6, babel 7.23); `npm audit` não rodado. A dependência `firebase` sem uso infla o `node_modules`.
- Código morto do template: Atletas, AtletaCard, computadores.json, Login/Logout/Protegida, Firebase.js, `gh-pages`, scripts `predeploy` e `deploy`.
- Sem testes (`npm test` é placeholder), sem lint, sem tsconfig, sem CI.
- Existe segunda cópia do projeto em `C:\Users\mlute\WebstormProjects\ch_construtora_site` (Deploy.md), com risco de divergência.
- TODO/FIXME no código: não encontrados.
- Número de WhatsApp repetido em 4 arquivos, sem constante central.

## 12. Histórico

- Branch: `main` (única; a `wfx-docs` foi apagada sem merge de propósito, não recuperar o commit `3fdee86`). Último commit `81a6def` em 2026-11-17: "seção de casas à venda na home e ajustes de fotos".
- Autores: mlutegar 51, André Costa Coelho 17, Claude 2, Michel Lutegar 1 commits.
- Marcos recentes: `465a43e` nova marca CH Arquitetura & Engenharia e equipe; `9493612` aba Casas à venda; `275bea4` imagens versionadas; `ddec8b2` imagens tiradas do git (causou o incidente de 404).
- `git status`: modificado `.gitignore`; untracked `.dockerignore`, `Dockerfile`, `docker-compose.yml`, `nginx.conf`, `deploy_hostgator/`, `obsidian-ch_construtora_site/`. Remoto não verificado.

## 13. Perguntas para mim

1. Os 8 `tmpclaude-*` e o `site_cpanel.zip` podem ser removidos? O que é `michel` no `.gitignore`?
2. O menu mobile ainda quebra? Em qual navegador e dispositivo?
3. Posso rodar `npm run build` e `npm audit` para checar a saúde das dependências e validar a correção do bundle?
4. O número 21970380708 e o e-mail do rodapé são os definitivos da cliente?
5. Posso registrar uma nota de contexto no Obsidian existente (`obsidian-ch_construtora_site`)?
