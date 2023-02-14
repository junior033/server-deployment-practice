'use strict';

const express = require('express');
const notFound = require('./handlers/404');
const errorHandler = require('./handlers/500');
const PORT = process.env.PORT || 3001;
const logger = require('./middleware/logger.js');

const app = express();

// base route
app.get('/', logger, (req, res, next) => {
  res.status(200).send(req.log);

});

app.get('./bad', (req, res, next) => {
  next('we have an error');
});

// catch-all route: must be at the end of file
app.use('*', notFound);
app.use(errorHandler);

//port for server to listen
const start = () => {
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
};

module.exports = { start, app };
