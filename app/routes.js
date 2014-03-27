var User = require('./models/user.js');

module.exports = function(app, passport) {

    var users = require('./controllers/users');

    app.route('/api/users')
        .get(users.getUsers)
        .post(users.saveUser)
        .put(users.updateUser);

    app.route('/api/users/:id')
        .get(users.getUser)
        .delete(users.deleteUser);

    app.route('*')
        .get(function(req, res) {
            res.sendfile('./public/index.html');
        });

    app.route('/auth/signup')
        .post(users.signup);

};
