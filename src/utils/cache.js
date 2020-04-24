const memoryCache = require('memory-cache');
const { getFromDB, getCollectionCount, getFromDBForPageIndex } = require('./db');
const displayCount = parseInt(process.env.DISPLAY_COUNT);

const getFromDBAndUpdateCache = async () => {
    const results = await getFromDB(displayCount);
    memoryCache.put(`__express__homepage`, results);
    return results;
};

const getResultsForPage = async page => {
    const results = await getFromDBForPageIndex(page - 1);
    return results;
};

const getTotalPages = count => {
    return Math.ceil(count / displayCount);
};

const getCache = () => {
    const cachedResults = memoryCache.get(`__express__homepage`);
    const cachedCount = memoryCache.get(`__express__count`);

    return async (req, res, next) => {
        const page = req.url.match(/\d+/);
        if (page && page[0].charAt(0) !== '0') {
            const pageNum = page[0];
            const results = await getResultsForPage(pageNum);
            const count = cachedCount ? cachedCount : await getCollectionCount();
            res.pagination = {
                pages: getTotalPages(count),
                currentPage: pageNum,
            };
            res.results = results;
        } else {
            const results = cachedResults ? cachedResults : await getFromDBAndUpdateCache();
            const count = cachedCount ? cachedCount : await getCollectionCount();
            res.pagination = {
                pages: getTotalPages(count),
                currentPage: 1,
            };
            res.results = results;
        }
        next();
    };
};

module.exports = getCache;
