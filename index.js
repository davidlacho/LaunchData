const express = require('express');
const morgan = require('morgan');
const path = require('path');
const axios = require('axios');
const parseData = require('./data/parseData');

const app = express();
const PORT = 5000;

// Routes:
const apiRouter = require('./routes/api');

// Server Config:
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));
axios.get('https://launchlibrary.net/1.4/launch?next=1000&mode=verbose')
  .then((data) => {
    const launchData = parseData.launchData(data);
    const rocketData = parseData.rocketData(data);
    app.use('/api', apiRouter(launchData, rocketData));

    // The 'catchall' handler: for any request that doesn't
    // match one above, send back React's index.html file.
    // If it makes it past landing page, serve static files from React:
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*'), (req, res) => {
      res.sendFile(path.join(`${__dirname}/client/build/index.html`));
    };

    app.listen(PORT);
    // eslint-disable-next-line no-console
    console.log(`🚀 Server ready at http://localhost:${PORT}`);
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(`Problem receiving data from Launch Library: ${err}`);
  });
