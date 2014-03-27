var User = require("../models/user.js");

exports.getUsers = function(req, res) {
    User.find(function(err, users) {
		if(err) res.send(err);
		res.json(users);
	});
};

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

exports.getUser = function(req, res) {
    User.findById(req.params.id, function(err, user) {
		if(err) res.send(err);
		res.json(user);
	});
};

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
