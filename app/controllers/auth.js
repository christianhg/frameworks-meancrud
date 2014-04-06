/*
 * controllers
 */
// sign up new user
exports.signup = function(req, res) {
    res.send();
};

// sign in as existing user
exports.signin = function(req, res) {
    res.send();
};

// sign out
exports.signout = function(req, res) {
    req.logout();
    res.redirect('/#/');
};

exports.isLoggedIn = function(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
};
