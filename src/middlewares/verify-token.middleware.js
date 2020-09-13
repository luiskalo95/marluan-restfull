const jwt = require('jsonwebtoken');
const { SECRET_PASSWORD } = require('../config')

const VerifyToken = async (request, response, next) => {
    const token = request.header('x-token');
    if (!token) {
        const error = new Error();
        error.status = 401;
        error.message = 'Token must be send'
        throw error;
    }
    try {
        const user = jwt.verify(token, SECRET_PASSWORD);
        request.user = user;
        next()
    } catch (error) {
        throw error
    }
}

module.exports = VerifyToken;