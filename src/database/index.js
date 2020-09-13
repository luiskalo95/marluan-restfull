const container = require('../startup/container');
const colors = require('colors');
const mongoose = require('mongoose');
const Config = container.resolve('Config');

const databaseConnect = async () => {
    try{
        await mongoose.connect(Config.MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true });
        console.log(colors.yellow('Conectado a la base de datos'));
    }catch(error){
        throw new Error(error)
    }
}

module.exports = databaseConnect;