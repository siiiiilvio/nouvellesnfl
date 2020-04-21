const axios = require('axios');
const memoryCache = require('memory-cache');
const googleTranslate = require('@vitalets/google-translate-api');
const parser = require('./parser');
const { getFromDB, insertDB } = require('./db');
const scrapeTarget = process.env.SCRAPE_TARGET;
const displayCount = parseInt(process.env.DISPLAY_COUNT);

const scraper = async () => {
    const scrape = await axios.get(scrapeTarget);
    const results = await getNews(scrape.data);
    return results;
};

const getNews = async scrape => {
    //parse news using Cheerio
    const parsedNews = parser(scrape);
    //get cached news or get from the db to establish
    //if scraped news are missing from the cache or db
    const existingNews = memoryCache.get(`__express__homepage`) || (await getFromDB(displayCount));
    const missingNews = diffArrays(parsedNews, existingNews);
    // translate the missing news if they exist
    const translatedNews = missingNews.length && (await translate(missingNews));
    if (translatedNews.length) {
        //insert translated news into the database
        const insertedNews = await insertDB(translatedNews);
        //concatenate the missing news and existing news into one array
        const allNews = insertedNews.concat(existingNews);
        allNews.length = displayCount;
        //update the cache to indefinite duration
        memoryCache.put(`__express__homepage`, allNews);
        return allNews;
    }
    return existingNews;
};

const diffArrays = (news, cache) => {
    const missingNews = news.filter(
        uncached => !cache.some(cached => uncached.headline === cached.headline)
    );
    return missingNews || [];
};

const translate = async array => {
    const translatedNews = [];
    const opts = {
        from: 'en',
        to: 'fr',
        client: 'webapp',
    };
    for (const [index, value] of array.entries()) {
        const headlineFR = await googleTranslate(value.headline, opts);
        value.headlineFR = headlineFR.text;
        await sleep(2000);

        const newsFR = await googleTranslate(value.news, opts);
        value.newsFR = newsFR.text;
        await sleep(2000);

        //don't translate or wait when injury is undefined or last loop iteration
        const injury = value.injury && (await googleTranslate(value.injury, opts));
        if (injury) {
            value.injury = injury.text;
            index !== array.length - 1 && (await sleep(2000));
        }

        translatedNews.push(value);
    }
    return translatedNews;
};

const sleep = time => {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
};

module.exports = scraper;
