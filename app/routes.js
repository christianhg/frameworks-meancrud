// bootstrap user model
var User = require('./models/users.js');
// bootstrap user controllers
var users = require('./controllers/users');
// bootstrap auth controllers
var auth = require('./controllers/auth');

var passport = require('passport');

module.exports = function(app, passport) {
    // user api routes
    app.route('/api/users')
        // get all users
        .get(users.getUsers)
        // save new user
        .post(users.saveUser)
        // update existing user
        .put(users.updateUser);

    // user api routes with id parameter
    app.route('/api/users/:id')
        .get(users.getUser) // get user by id
        .delete(users.deleteUser); // delete user by id

    // authentication routes
    app.route('/auth/signup')
        .post(auth.signup);

    app.route('/auth/signin')
        .post(auth.signin);

    /*app.route('/#/').
        get(passport.authenticate('local', function(req, res) {
            res.redirect('/#/users');
        }));*/

    // catch all other routes and display page
    /*app.route('*')
        .get(function(req, res) {
            res.sendfile('./public/index.html');
        });*/
};
