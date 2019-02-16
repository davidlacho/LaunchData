const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const PORT = 5000;

// Routes:
const apiRouter = require('./routes/api');

// Server Config:
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

app.use('/routes/api', apiRouter());

// The 'catchall' handler: for any request that doesn't
// match one above, send back React's index.html file.
// If it makes it past landing page, serve static files from React:
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*'), (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
};


app.listen(PORT);
console.log(`🚀 Server ready at http://localhost:${PORT}`);