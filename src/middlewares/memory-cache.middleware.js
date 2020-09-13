const { CACHE_KEY } = require("../config")

const mcache = require('memory-cache');

const MemoryCache = (duration) => {
    return (request, response, next) => {
        const key = CACHE_KEY + (request.originUrl || request.url);
        const cachedBody = mcache.get(key);

        if (cachedBody) {
            return response.send(JSON.parse(cachedBody));
        } else {
            response.sendResponse = response.send;
            response.send = (body) => {
                mcache.put(key, body, duration * 1000);
                response.sendResponse(body);
            }
            next();
        }
    }
}

module.exports = MemoryCache;