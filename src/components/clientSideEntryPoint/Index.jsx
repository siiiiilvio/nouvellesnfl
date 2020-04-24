const React = require('react');
const { hydrate } = require('react-dom');
const Index = require('../Index');

hydrate(
    <Index results={window.__DATA__RESULTS__} pagination={window.__DATA__PAGINATION__} />,
    document.getElementById('root')
);
