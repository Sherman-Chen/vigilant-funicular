require('babel-register');
require('babel-polyfill');

// mock a body for react testing
global.document = require('jsdom').jsdom('<body><div id="app"></div></body>');
global.window = document.defaultView;
global.navigator = window.navigator;