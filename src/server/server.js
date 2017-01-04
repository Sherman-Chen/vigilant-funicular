'use strict'

const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static('src/client'));

// switched server to fetch data and respond to client
// this is incase we need to preform any database operations with the fetched data
app.get('/data', (req, res) => {
  axios.get('https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js')
  .then(resp => {
    if (resp.status === 200) {
      res.status(200).json(resp.data.products);
    } else {
      res.status(500).json({});
    }
  })
  .catch(err => {
    console.error(err)
  })
})

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('src/client', 'index.html'));
});

const server = app.listen(8080, () => {
  console.log('app listening on port 8080');
})
