const memoryCache = require('memory-cache');
const { getFromDB } = require('./db');
const displayCount = parseInt(process.env.DISPLAY_COUNT);

const getFromDBAndUpdateCache = async () => {
    const results = await getFromDB(displayCount);
    memoryCache.put(`__express__homepage`, results);
    return results;
};

const getCache = () => {
    return async (req, res, next) => {
        const cache = memoryCache.get(`__express__homepage`);
        const results = cache ? cache : await getFromDBAndUpdateCache();
        res.results = results;
        next();
    };
};

module.exports = getCache;
