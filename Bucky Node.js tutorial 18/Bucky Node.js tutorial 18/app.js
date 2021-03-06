﻿var express = require('express');
var path = require('path');
var logger = require('morgan');                 //module for logging iout info to terminal
var cookieParser = require('cookie-parser');    //handling cookies
var bodyParser = require('body-parser');        //parse jason fex

var routes = require('./routes/index');
var jade_tutorial_1 = require('./routes/jade_tutorial_1');
var about = require('./routes/about');

var app = express();        //init app to use express

// view engine setup
app.set('views', path.join(__dirname, 'views'));        
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

//all relevant urls 
app.use('/', routes);
app.use('/jade_tutorial_1', jade_tutorial_1);
app.use('/about', about);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
