const ftp = require("basic-ftp");
const fs = require("fs");
const path = require("path");
require('dotenv').config({ path: '.env.deploy' });

async function uploadDirectory(client, localDir, remoteDir) {
    const files = fs.readdirSync(localDir, { withFileTypes: true });

    for (const file of files) {
        const localPath = path.join(localDir, file.name);
        const remotePath = remoteDir + '/' + file.name;

        if (file.isDirectory()) {
            console.log(`Criando pasta: ${remotePath}`);
            try {
                await client.ensureDir(remotePath);
            } catch (err) {
                // Ignora erro se a pasta já existe
            }
            await uploadDirectory(client, localPath, remotePath);
        } else {
            console.log(`Enviando: ${file.name}`);
            await client.uploadFrom(localPath, remotePath);
            console.log(`✓ Enviado: ${file.name}`);
        }
    }
}

async function deploy() {
    const client = new ftp.Client();
    client.ftp.verbose = true; // Mostra logs detalhados

    try {
        console.log('Iniciando deploy para o Hostgator...');
        console.log('Host:', process.env.FTP_HOST);
        console.log('Usuário:', process.env.FTP_USER);
        console.log('Caminho remoto:', process.env.FTP_REMOTE_PATH);
        console.log('');

        // Conecta no servidor FTP
        console.log('Conectando...');
        await client.access({
            host: process.env.FTP_HOST,
            user: process.env.FTP_USER,
            password: process.env.FTP_PASSWORD,
            port: parseInt(process.env.FTP_PORT) || 21,
            secure: false
        });

        console.log('Conectado com sucesso!');
        console.log('');

        // Navega para o diretório remoto
        const remoteDir = process.env.FTP_REMOTE_PATH || 'public_html';
        console.log(`Acessando pasta: ${remoteDir}`);
        await client.ensureDir(remoteDir);

        // Faz upload de todos os arquivos
        console.log('Iniciando upload dos arquivos...');
        console.log('');
        await uploadDirectory(client, './build', remoteDir);

        console.log('');
        console.log('✓ Deploy concluído com sucesso!');

    } catch(err) {
        console.error('');
        console.error('✗ Erro no deploy:');
        console.error(err.message);
        process.exit(1);
    } finally {
        client.close();
    }
}

deploy();
