const express = require('express');
const router = express.Router();

// API endpoints
module.exports = (data) => {
  router.get('/launch', (req, res) => {
    res.json(data);
  });

  router.get('*', (req, res) => {
    res.status(404).send('Not Found!');
  });

  return router;
};