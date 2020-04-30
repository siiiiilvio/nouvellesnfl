const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const Index = require('./components/Index');
const player = require('./controllers/player');
const team = require('./controllers/team');
const page = require('./controllers/page');
const homepage = require('./controllers/homepage');

const router = express.Router();

const renderView = res => {
    const { results, pagination } = res;
    const reactApp = renderToString(<Index results={results} pagination={pagination} />);
    res.status(200).render('index', { reactApp, results, pagination });
};

router.get('/joueur*', player, (req, res) => {
    renderView(res);
});

router.get('/equipe*', team, (req, res) => {
    renderView(res);
});

router.get('/page/:index', page, (req, res) => {
    renderView(res);
});

router.get('', homepage, (req, res) => {
    renderView(res);
});

module.exports = router;
