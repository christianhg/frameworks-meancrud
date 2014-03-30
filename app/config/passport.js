var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require("../models/users.js");

module.exports = function() {
	// use local strategy
	passport.use(new LocalStrategy({
			usernameField: 'username',
			passwordField: 'password'
		},
		function(username, password, done) {
			User.findOne({
				username: username
			}, function(err, user) {
				// if an exception occured
				if (err) {
					return done(err);
				}
				// if the user doesn't exist
				if (!user) {
					return done(null, false, {
						message: 'Unknown user'
					});
				}
				// if the password is wrong
				if (!user.authenticate(password)) {
					return done(null, false, {
						message: 'Incorrect password'
					});
				}
				// all good
				return done(null, user);
			});
		}
	));

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
};
