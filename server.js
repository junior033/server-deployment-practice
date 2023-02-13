'use strict';

//require
const express = require('express');
const errorHandler = require('./handlers/500');

//middleware
const logger = require('./middleware/logger.js');

//use
const app = express();

// base route
app.get('/', logger, (req, res, next) => {
  res.status(200).send(req.log); 

});

// app.get('./bad', (req, res, next) => {
//   throw new Error (' we have an error');
// }
// )

// catch-all route: must be at the end of file
app.use('*', (req, res, next) => {
  res.status(404).send({
    error: 404,
    route: req.baseUrl,
    message: 'Not Found'
  })
})

// app.use(errorHandler);

//port for server to listen
const start = () =>{
app.listen(3001, () => console.log(`Listening on Port 3001`));
}

module.exports = { start, app };