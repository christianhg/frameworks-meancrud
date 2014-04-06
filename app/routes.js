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
        .get(isLoggedIn, movies.getMovies)
        // save new movie
        .post(isLoggedIn, movies.saveMovie)
        // update existing movie
        .put(isLoggedIn, movies.updateMovie);

    // movie api routes with id parameter
    app.route('/api/movies/:id')
        // get movie by id
        .get(isLoggedIn, movies.getMovie)
        // delete movie by id
        .delete(isLoggedIn, movies.deleteMovie);

    /*
     * authentication routes
     */
    // sign out
    app.route('/auth/signup')
        .post(passport.authenticate('local-signup'), auth.signup);

    // sign in
    app.route('/auth/signin')
        .post(passport.authenticate('local-signin'), auth.signin);

    // sign out
    app.route('/auth/signout')
        .get(auth.signout);

    // check authentication
    app.route('/auth/isLoggedIn')
        .get(auth.isLoggedIn);

    // route middleware to check login
    function isLoggedIn(req, res, next) {
        if(req.isAuthenticated()) {
            return next();
        }
        res.redirect('/');
    }
};
