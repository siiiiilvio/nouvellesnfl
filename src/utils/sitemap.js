const SitemapGenerator = require('sitemap-generator');
const env = process.env.NODE_ENV;
const host = env === 'production' ? process.env.PRODURL : `${process.env.HOST}:${process.env.PORT}`;

const sitemap = () => {
    //create generator
    const generator = SitemapGenerator(`${host}`, {
        maxDepth: 0,
        filepath: './sitemap.xml',
        maxEntriesPerFile: 50000,
        stripQuerystring: true,
    });

    //start the crawler
    generator.start();
};

module.exports = sitemap;
