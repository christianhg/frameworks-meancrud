/*
* module dependencies
*/
var passport = require('passport');
var User = require("../models/user.js");

module.exports = function() {
	// serialize sessions
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	// deserialize sessions
	passport.deserializeUser(function(id, done) {
		User.findOne({
			_id: id
		}, function(err, user) {
			done(err, user);
		});
	});

	// Initialize strategies
	require('./strategies/local')();
};
