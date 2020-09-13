const container = require('./src/startup/container');
const databaseConnect = require('./src/database');
const Server = container.resolve('Server');
const colors = require('colors');

//TODO: INICIALIZACION RESTFUL
(async () => {
    try {
        await databaseConnect();
        Server.start();
    } catch (err) {
        console.log(colors.red(err));
        process.exit(1);
    }
})();




