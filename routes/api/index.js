const express = require('express');

const router = express.Router();

// API endpoints
module.exports = () => {

  router.get('*', (req, res) => {
    res.status(404).send('Not Found');
  });

  return router;
};