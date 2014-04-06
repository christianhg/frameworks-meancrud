/*
 * module dependencies
 */
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var passport = require('passport');

/*
 * config files
 */
var appConfig = require('./app/config/app');
var dbConfig = require('./app/config/db');

// initialize express app
var app = express();

// bootstap db connection
mongoose.connect(dbConfig.connectionString);
// configure passport object
require('./app/config/passport')(passport);

/*
 * middleware
 */
// static folder
app.use(express.static(__dirname + '/public'));
// log all requests in console
app.use(morgan('dev'));
// cookie middleware must be used before session middleware
app.use(cookieParser());
// session middleware
app.use(session({ secret: appConfig.sessionSecret }));
// get data from html forms
app.use(bodyParser());
// faux http method support
app.use(methodOverride());
// authentication middleware
app.use(passport.initialize());
// login sessions
app.use(passport.session());
// store and retrieve messages from session
app.use(flash());

// require routes, inject app and passport
require('./app/routes')(app, passport);

// start app by listening on port
app.listen(appConfig.port);

// log initialization
console.log('MEAN CRUD running on port ' + appConfig.port);
