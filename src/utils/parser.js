const cheerio = require('cheerio');

const parser = scrape => {
    const $ = cheerio.load(scrape);
    const newsWrappers = $('.news-update');
    const newsArray = [];
    newsWrappers.each(function (i, elem) {
        const teamAbbr = $(this).find('.news-update__logo').attr('alt');
        const player = $(this).find('.news-update__player-link').text();
        const position = $(this).find('.news-update__pos').text();
        $(this).find('.news-update__meta .news-update__pos').remove();
        const injury = $(this).find('.news-update__inj').text();
        $(this).find('.news-update__inj').remove();
        const team = $(this).find('.news-update__meta div').text();
        const date = $(this).find('.news-update__timestamp').text();
        const headline = $(this).find('.news-update__headline').text();
        const news = $(this).find('.news-update__news').first().text();
        newsArray.push({
            team,
            player,
            news,
            headline,
            teamAbbr,
            position,
            injury,
            date,
        });
    });
    return newsArray.reverse();
};

module.exports = parser;
