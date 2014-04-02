// bootstrap user controllers
var users = require('./controllers/users');
// bootstrap movie controllers
var movies = require('./controllers/movies');
// bootstrap auth controllers
var auth = require('./controllers/auth');

module.exports = function(app, passport) {
    /*
     * user api routes
     */
    app.route('/api/users')
        // get all users
        .get(users.getUsers)
        // save new user
        .post(users.saveUser)
        // update existing user
        .put(users.updateUser);

    // user api routes with id parameter
    app.route('/api/users/:id')
        // get user by id
        .get(users.getUser)
        // delete user by id
        .delete(users.deleteUser);

    /*
     * movie api routes
     */
    app.route('/api/movies')
        // get all movies
        .get(movies.getMovies)
        // save new movie
        .post(movies.saveMovie)
        // update existing movie
        .put(movies.updateMovie);

    // movie api routes with id parameter
    app.route('/api/movies/:id')
        // get movie by id
        .get(movies.getMovie)
        // delete movie by id
        .delete(movies.deleteMovie);

    /*
     * authentication routes
     */
    app.route('/auth/signup')
        .post(auth.signup);

    app.route('/auth/signin')
        .post(auth.signin);

    app.route('/auth/signout')
        .get(auth.signout);
};
