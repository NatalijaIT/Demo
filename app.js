var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require("http");
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var promise = mongoose.connect('mongodb://Natalia:122448@ds135069.mlab.com:35069/slides', {
    useMongoClient: true
});

var routes = require('./routes/users');
routes(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(port, () => {
    console.log('Listening on port ' + port);
});