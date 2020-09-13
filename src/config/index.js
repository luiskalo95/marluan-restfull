if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const CONFIG = {
    PORT            : process.env.PORT,
    MONGODB_URI     : process.env.MONGODB_URI,
    APLICATION_NAME : process.env.APLICATION_NAME,
    SECRET_PASSWORD : process.env.SECRET_PASSWORD,
    CACHE_KEY       : process.env.CACHE_KEY,
    SWAGGER_PATH    : `../config/swagger/${process.env.SWAGGER_DOC}.json`
}

module.exports = CONFIG;
