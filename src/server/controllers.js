'use strict'

const axios = require('axios');

exports.fetchController = (req, res) => {
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
};

