var LocalStrategy = require('passport-local').Strategy;
var User = require("../models/user.js");

module.exports = function(passport) {
	// serialize sessions
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	// deserialize sessions
	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});

	passport.use('local-signup', new LocalStrategy({
		usernameField: 'username',
		passwordField: 'password',
	},
	function(username, password, done) {
		User.findOne({
			'local.username': username
		},
		function(err, user) {
			// if an exception occured
			if (err) {
				return done(err);
			}
			if(user) {
				// uername already taken
				return done(null, false);
			} else {
				var newUser = new User();
				newUser.local.username = username;
				newUser.local.password = newUser.generateHash(password);

				newUser.save(function(err) {
					if(err) {
						throw err;
					}
					return done(null, newUser);
				});
			}
		});
	}));

	passport.use('local-signin', new LocalStrategy({
		usernameField: 'username',
		passwordField: 'password',
	},
	function(username, password, done) {
		User.findOne({
			'local.username': username
		},
		function(err, user) {
			// if an exception occured
			if (err) {
				return done(err);
			}

			if(!user) {
				// username doesn't exist
				return done(null, false);
			}

			if(!user.validPassword(password)) {
				// invalid password
				return done(null, false);
			}

			// all good
			return done(null, user);
		});
	}));
};
