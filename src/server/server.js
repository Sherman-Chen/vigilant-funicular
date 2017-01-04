'use strict'

const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const fetchController = require('./controllers').fetchController;

app.use(bodyParser.json());

app.use(express.static('src/client'));

// switched server to fetch data and respond to client
// this is incase we need to preform any database operations with the fetched data
app.get('/data', fetchController);

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('src/client', 'index.html'));
});

const server = app.listen(8080, () => {
  console.log('app listening on port 8080');
})
