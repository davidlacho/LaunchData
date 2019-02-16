const express = require('express');

const router = express.Router();

// API endpoints
module.exports = (launchData, rocketData) => {
  router.get('/launch', (req, res) => {
    res.json(launchData);
  });

  router.get('/launch/:id', (req, res) => {
    res.json(rocketData[req.params.id]);
  });

  router.get('*', (req, res) => {
    res.status(404).send('Not Found!');
  });

  return router;
};
