const Error = (error,request,response,next) => {
    const httpStatus = error.status || 500;

    return response.status(httpStatus).json({
        ok: false,
        message: error.message || 'Internal server error'
    })
}

module.exports = Error;