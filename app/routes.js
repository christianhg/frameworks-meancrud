// bootstrap movie controllers
var movies = require('./controllers/movies');
// bootstrap auth controllers
var auth = require('./controllers/auth');

module.exports = function(app, passport) {
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
        .post(passport.authenticate('local-signup'), function(req, res) {
            res.send();
        });

    app.route('/auth/signin')
        .post(passport.authenticate('local-signin'), function(req, res) {
            res.send();
        });

    app.route('/auth/signout')
        .get(function(req, res) {
            req.logout();
            res.redirect('/#/');
        });

    app.route('/auth/isLoggedIn')
        .get(function(req, res) {
            res.send(req.isAuthenticated() ? req.user : '0');
        });
};
