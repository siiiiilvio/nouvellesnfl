const { getResultsForPage } = require('../utils/db');
const displayCount = parseInt(process.env.DISPLAY_COUNT);

const page = async (req, res, next) => {
    const pageNum = req.params.index;
    const { results, count } = await getResultsForPage(pageNum);
    res.pagination = {
        pages: Math.ceil(count / displayCount),
        currentPage: pageNum,
        type: 'page',
    };
    res.results = results;
    next();
};

module.exports = page;
