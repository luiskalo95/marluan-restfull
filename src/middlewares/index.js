module.exports = {
    NotFound    : require('./not-found.middleware'),
    Error       : require('./error.middleware'),
    VerifyToken : require('./verify-token.middleware'),
    ParseInt    : require('./parse-int.middleware'),
    MemoryCache : require('./memory-cache.middleware')
}