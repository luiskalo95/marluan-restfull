const NotFound = (request,response,next) => {
    response.status(400).json({
        ok: false,
        message: 'Resource not found'
    });
}

module.exports = NotFound;