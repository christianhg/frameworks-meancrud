/*
 * module dependencies
 */
var mongoose = require('mongoose');
var User = require('../models/user.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

/*
 * controllers
 */
// sign up new user
exports.signup = function(req, res) {
    var user = new User(req.body);
    user.provider = 'local';

    user.save(function(err) {
        if(err) {
            res.send(err);
        } else {
            user.password = undefined;
            user.password = undefined;

            req.login(user, function(err) {
                if(err) {
                    res.send(err);
                } else {
                    res.json(user);
                }
            });
        }
    });
};

// sign in as existing user
exports.signin = function(req, res, next) {
	/*passport.authenticate('local', function(err, user, info) {
		if (err || !user) {
			res.send(400, info);
		} else {
			req.logIn(user, function(err) {
				if (err) {
					res.send(err);
				} else {
					res.jsonp(user);
				}
			});
		}
	})(req, res, next);*/
};

// sign out
exports.signout = function(req, res) {
    req.logout();
	res.redirect('/');
};
