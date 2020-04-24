const SitemapGenerator = require('sitemap-generator');
const host = process.env.HOST;
const port = process.env.PORT;

const sitemap = () => {
    //create generator
    const generator = SitemapGenerator(`${host}:${port}`, {
        maxDepth: 0,
        filepath: './sitemap.xml',
        maxEntriesPerFile: 50000,
        stripQuerystring: true,
    });

    //register event listeners
    generator.on('done', () => {
        console.log('sitemap created');
    });

    //start the crawler
    generator.start();
};

module.exports = sitemap;