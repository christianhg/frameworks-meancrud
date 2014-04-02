/*
 * module dependencies
 */
var Movie = require("../models/movie.js");

/*
 * controllers
 */
// get all movies
exports.getMovies = function(req, res) {
    Movie.find(function(err, movies) {
        if(err) res.send(err);
        res.json(movies);
    });
};

// save new movie
exports.saveMovie = function(req, res) {
    new Movie(req.body).save(function(err) {
        if(err) res.send(err);
        Movie.find(function(err, movies) {
            if(err) res.send(err);
            res.json(movies);
        });
    });
};

// update existing movie
exports.updateMovie = function(req, res) {
    Movie.findById(req.body._id, function(err, movie) {
        movie.title = req.body.title;
        movie.year = req.body.year;
        movie.imdb = req.body.imdb;
        movie.save(function(err) {
            if(err) res.send(err);
            Movie.find(function(err, movies) {
                if(err) res.send(err);
                res.json(movies);
            });
        });
    });
};

// get single movie
exports.getMovie = function(req, res) {
    Movie.findById(req.params.id, function(err, movie) {
        if(err) res.send(err);
        res.json(movie);
    });
};

// delete movie
exports.deleteMovie = function(req, res) {
    Movie.findById(req.params.id, function(err, movie) {
        movie.remove(function(err) {
            if(err) res.send(err);
            Movie.find(function(err, movies) {
                if(err) res.send(err);
                res.json(movies);
            });
        });
    });
};
