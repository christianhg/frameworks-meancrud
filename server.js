/*
 * module dependencies
 */
// node.js web framework
var express = require('express');
var bodyParser = require('body-parser');
// session middleware
var session = require('express-session');
// store and retrieve messages from session
var flash = require('connect-flash');
// cookie parsing middleware
var cookieParser = require('cookie-parser');
// faux http method support
var methodOverride = require('method-override');
// mongodb object-modeling
var mongoose = require('mongoose');
// authentication middleware
var passport = require('passport');

/*
 * config files
 */
var config = require('./app/config/app');
var dbConfig = require('./app/config/db');
var passportConfig = require('./app/config/passport');

// initialize express app
var app = express();

// cookie middleware must be used before session middleware
app.use(cookieParser());

// bootstap db connection
mongoose.connect(dbConfig.connectionString, function(err) {
    // mongodb session store module
    var mongoStore = require('connect-mongodb');
    // session middleware
    app.use(session({
        secret: config.sessionSecret,
        // session store instance
        store: new mongoStore({
            db: mongoose.connection.db
        })
    }));
});

/*
 * middleware
 */
// static folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());
app.use(methodOverride());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// require routes, inject app and passport
require('./app/routes')(app, passport);

// start app by listening on port
app.listen(config.port);

// log initialization
console.log('MEAN CRUD running on port ' + config.port);

// expose app
// exports = module.exports = app;
