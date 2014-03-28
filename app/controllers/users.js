var User = require("../models/user.js");

// get all users
exports.getUsers = function(req, res) {
    User.find(function(err, users) {
		if(err) res.send(err);
		res.json(users);
	});
};

// save new user
exports.saveUser = function(req, res) {
    new User({
		username: req.body.username,
        password: req.body.password,
        email: req.body.email,
		name: {
			first: req.body.firstName,
			last: req.body.lastName
		}
	}).save(function(err) {
		if(err) res.send(err);
		User.find(function(err, users) {
			if(err) res.send(err);
			res.json(users);
		});
	});
};

// update existing user
exports.updateUser = function(req, res) {
    User.findById(req.body._id, function(err, user) {
		user.username = req.body.username;
        user.password = req.body.password;
        user.email = req.body.email;
		user.name.first = req.body.firstName;
		user.name.last = req.body.lastName;
		user.save(function(err) {
			if(err) res.send(err);
			User.find(function(err, users) {
				if(err) res.send(err);
				res.json(users);
			});
		});
    });
};

// get single user
exports.getUser = function(req, res) {
    User.findById(req.params.id, function(err, user) {
		if(err) res.send(err);
		res.json(user);
	});
};

// delete user
exports.deleteUser = function(req, res) {
    User.findById(req.params.id, function(err, user) {
		user.remove(function(err) {
			if(err) res.send(err);
			User.find(function(err, users) {
				if(err) res.send(err);
				res.json(users);
			});
		});
	});
};
