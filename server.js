// module dependencies
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var passport = require('passport');

// initialize express app
var app = express();

// bootstap db connection
var db = require('./app/config/db');
mongoose.connect(db.connectionString);

// set port
var port = process.env.PORT || 3000;

// boostrap passport config
require('./app/config/passport');

// middleware
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());

// require routes
require('./app/routes')(app, passport);

// start app by listening on port
app.listen(port);

// log initialization
console.log('MEAN CRUD running on port ' + port);

// expose app
exports = module.exports = app;
