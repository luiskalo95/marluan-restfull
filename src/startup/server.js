const express = require('express');
const colors = require('colors');

let _express = null; // Propiedades privadas
let _config = null;

class Server {

    constructor({ Config, MainRouter }) {
        _express = express().use(MainRouter);
        _config = Config;
    }

    start() {
        return new Promise((resolve, reject) => {
            _express.listen(_config.PORT, () => {
                console.log(colors.cyan(`The aplication '${_config.APLICATION_NAME}' is running on port ${_config.PORT}`));
            });
            resolve();
        });
    }
}

module.exports = Server;