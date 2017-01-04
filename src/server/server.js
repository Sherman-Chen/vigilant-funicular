'use strict'

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('src/client'));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('src/client', 'index.html'));
});

const server = app.listen(8080, () => {
  console.log('app listening on port 8080');
})
