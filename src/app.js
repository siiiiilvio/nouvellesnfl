require('dotenv').config({ debug: process.env.DEBUG });
const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const CronJob = require('cron').CronJob;
const helmet = require('helmet');
const scraper = require('./utils/scraper');
const sitemap = require('./utils/sitemap');
const router = require('./routes');

const host = process.env.HOST;
const port = process.env.PORT;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../public')));
app.use(helmet());

app.use('/', router);

const scrapeJob = new CronJob('*/10 * * * *', scraper, null, true, 'America/Los_Angeles');
scrapeJob.start();

const sitemapJob = new CronJob('0 0 * * *', sitemap, null, true, 'America/Los_Angeles');
sitemapJob.start();

app.listen(port, () => debug(`listening on port ${port}, ${host}:${port}/`));
