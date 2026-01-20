# Deploy Automático para Hostgator

## Build do Projeto

O build já foi executado com sucesso! Os arquivos estão na pasta `build/`.

## Deploy Manual (via FTP)

Se preferir fazer upload manual:

1. Acesse seu painel Hostgator (cPanel)
2. Vá em "Gerenciador de Arquivos"
3. Navegue até a pasta `public_html` (ou a pasta do seu domínio)
4. Faça upload de todos os arquivos da pasta `build/`

## Deploy Automático (Recomendado)

### Configuração Inicial (apenas uma vez)

1. Copie o arquivo `.env.deploy.example` para `.env.deploy`:
   ```bash
   cp .env.deploy.example .env.deploy
   ```

2. Edite o arquivo `.env.deploy` com suas credenciais do Hostgator:
   ```env
   FTP_HOST=ftp.seudominio.com.br
   FTP_USER=seu_usuario_ftp@seudominio.com.br
   FTP_PASSWORD=sua_senha_ftp
   FTP_PORT=21
   FTP_REMOTE_PATH=/public_html
   ```

### Como obter as credenciais FTP do Hostgator:

1. Acesse o cPanel da Hostgator
2. Procure por "Contas FTP" ou "FTP Accounts"
3. Use as credenciais da conta principal ou crie uma nova conta FTP
4. O host FTP geralmente é: `ftp.seudominio.com.br`

### Executar Deploy

Após configurar o arquivo `.env.deploy`, execute:

```bash
npm run deploy-hostgator
```

Este comando vai:
1. Fazer o build do projeto automaticamente
2. Conectar no servidor FTP do Hostgator
3. Fazer upload de todos os arquivos para a pasta configurada
4. Mostrar o progresso de cada arquivo enviado

### Observações Importantes

- O arquivo `.env.deploy` não será commitado no git (já está no .gitignore)
- Guarde suas credenciais FTP em local seguro
- Se o site estiver em uma subpasta, ajuste o `FTP_REMOTE_PATH` no `.env.deploy`
  - Exemplo para subpasta: `/public_html/meusite`
- O deploy não apaga arquivos existentes no servidor (apenas sobrescreve/adiciona)

## Solução de Problemas

### Erro de conexão FTP

- Verifique se o host, usuário e senha estão corretos
- Verifique se o firewall não está bloqueando a porta 21
- Tente usar o modo passivo FTP (já configurado por padrão)

### Arquivos não aparecem no site

- Verifique se o `FTP_REMOTE_PATH` está correto
- Verifique se está enviando para a pasta correta do domínio
- Limpe o cache do navegador (Ctrl+Shift+R)

### Build muito grande

O projeto tem alguns warnings sobre tamanho dos arquivos. Considere:
- Comprimir/otimizar imagens antes do build
- Implementar lazy loading de imagens
- Usar formatos modernos como WebP
