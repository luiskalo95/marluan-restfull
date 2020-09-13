const { sign } = require("jsonwebtoken");
const {SECRET_PASSWORD} = require('../config');

const GenerateJsonWebToken = (user) => {
    return sign(user,SECRET_PASSWORD, {expiresIn: '4h'})
}

module.exports = GenerateJsonWebToken;

