const React = require('react');
const { hydrate } = require('react-dom');
const Index = require('../Index');

hydrate(<Index results={window.__DATA__} />, document.getElementById('root'));
