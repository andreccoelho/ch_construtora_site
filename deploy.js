const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();
require('dotenv').config({ path: '.env.deploy' });

const config = {
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    host: process.env.FTP_HOST,
    port: process.env.FTP_PORT || 21,
    localRoot: __dirname + '/build',
    remoteRoot: process.env.FTP_REMOTE_PATH || '/public_html',
    include: ['*', '**/*'],
    exclude: [],
    deleteRemote: false,
    forcePasv: false,  // Desativa modo passivo (tenta ativo)
    sftp: false,
    connTimeout: 60000,  // Timeout de 60 segundos
    pasvTimeout: 60000,
    keepalive: 10000
};

console.log('Iniciando deploy para o Hostgator...');
console.log('Host:', config.host);
console.log('Caminho remoto:', config.remoteRoot);
console.log('');

ftpDeploy
    .deploy(config)
    .then(res => {
        console.log('');
        console.log('Deploy concluído com sucesso!');
    })
    .catch(err => {
        console.error('Erro no deploy:', err);
        process.exit(1);
    });

ftpDeploy.on('uploading', function(data) {
    console.log('Enviando:', data.filename);
});

ftpDeploy.on('uploaded', function(data) {
    console.log('Enviado:', data.filename);
});
