/** 
 * @module
 * Express Server for hosting RestFul service and server http contents
 * 
*/
const express = require('express');
const path = require('path');
const routes = require('../routes');
const logger = require('morgan');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');

let app = express();

app.use(favicon(path.join('public', 'favicon.ico')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//setup middlewares
app.use(logger('dev'));
app.use('/api/v.1.0', routes);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  //res.status(err.status || 500);
  console.log("err=" + JSON.stringify(err));
  res.status(err.status || 500).json({
    message: err.message,
    error: {}
  });
});

module.exports = app;