var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var http = require("http");
var app = express();

var users = require('./routes/users');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('app/public'));
app.use(require('./routes/users'));

app.set('port', process.env.PORT || 3000);

app.use('/users', users);

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

app.get('/', function(req, res) {
    res.send(www);
})

var server = app.listen(app.get('port'), function() {
    console.log('Listening on port ' + app.get('port'));
});

module.exports = app;