var User = require("../models/users.js");

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

exports.signin = function(req, res) {
    var user = new User(req.body);
};
