const { getResultsForPlayer } = require('../utils/db');
const { getQueryParams } = require('../utils/url');
const displayCount = parseInt(process.env.DISPLAY_COUNT);

const player = async (req, res, next) => {
    const player = decodeURI(getQueryParams('name', req.url));
    const team = decodeURI(getQueryParams('team', req.url));
    const position = getQueryParams('pos', req.url);
    const pageNum = getQueryParams('page', req.url) || 1;
    const { results, count } = await getResultsForPlayer({ player, team, position, pageNum });
    res.pagination = {
        pages: Math.ceil(count / displayCount),
        currentPage: pageNum,
        params: {
            player,
            team,
            position,
        },
        type: 'player',
    };
    res.results = results;
    next();
};

module.exports = player;
