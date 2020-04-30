const memoryCache = require('memory-cache');
const { getFromDB, getCollectionCount } = require('../utils/db');
const displayCount = parseInt(process.env.DISPLAY_COUNT);

const getFromDBAndUpdateCache = async () => {
    const results = await getFromDB(displayCount);
    memoryCache.put(`__express__homepage`, results);
    return results;
};

const getCache = async (req, res, next) => {
    const cachedResults = memoryCache.get(`__express__homepage`);
    const cachedCount = memoryCache.get(`__express__count`);

    const results = cachedResults ? cachedResults : await getFromDBAndUpdateCache();
    const count = cachedCount ? cachedCount : await getCollectionCount();
    res.pagination = {
        pages: Math.ceil(count / displayCount),
        currentPage: 1,
        type: 'page',
    };
    res.results = results;
    next();
};

module.exports = getCache;
