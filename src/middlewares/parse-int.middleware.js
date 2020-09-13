const ParseToInt = (request,response,next) => {
    const queryStrings = request.query;
    for(const key in queryStrings){
        const isIdMongo = (queryStrings[key].length >= 20) ? false : !isNaN(parseInt(queryStrings[key]));
        if(isIdMongo){
            queryStrings[key] = parseInt(queryStrings[key]);
        }
    }
    request.query = queryStrings;
    next();
};

module.exports = ParseToInt;