require('dotenv').config({ debug: process.env.DEBUG });
const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const path = require('path');
const debug = require('debug')('app');
const CronJob = require('cron').CronJob;
const helmet = require('helmet');
const getCache = require('./utils/cache');
const scraper = require('./utils/scraper');
const Index = require('./components/Index');

const port = process.env.PORT;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../public')));
app.use(helmet());

app.get('/', getCache(), (req, res) => {
    const results = res.results;
    const reactApp = renderToString(<Index results={results} />);
    res.status(200).render('index', { reactApp, results });
});

const job = new CronJob('*/10 * * * *', scraper, null, true, 'America/Los_Angeles');
job.start();

app.listen(port, () => debug(`listening on port ${port}, http://localhost:${port}/`));
