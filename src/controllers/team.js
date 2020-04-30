const { getResultsForTeam } = require('../utils/db');
const { getQueryParams } = require('../utils/url');
const displayCount = parseInt(process.env.DISPLAY_COUNT);

const team = async (req, res, next) => {
    const team = decodeURI(getQueryParams('team', req.url));
    const pageNum = getQueryParams('page', req.url) || 1;
    const { results, count } = await getResultsForTeam({ team, pageNum });
    res.pagination = {
        pages: Math.ceil(count / displayCount),
        currentPage: pageNum,
        params: {
            team,
        },
        type: 'team',
    };
    res.results = results;
    next();
};

module.exports = team;
