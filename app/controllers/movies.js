var Movie = require("../models/movies.js");

// get all movies
exports.getMovies = function(req, res) {
    Movie.find(function(err, movies) {
        if(err) res.send(err);
        res.json(movies);
    });
};

// save new movie
exports.saveUser = function(req, res) {
    new Movie(req.body).save(function(err) {
        if(err) res.send(err);
        Movie.find(function(err, movies) {
            if(err) res.send(err);
            res.json(movies);
        });
    });
};

// update existing movie
exports.updateUser = function(req, res) {
    Movie.findById(req.body._id, function(err, movie) {
        movie.username = req.body.username;
        movie.password = req.body.password;
        movie.email = req.body.email;
        movie.name.first = req.body.firstName;
        movie.name.last = req.body.lastName;
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
exports.getUser = function(req, res) {
    Movie.findById(req.params.id, function(err, movie) {
        if(err) res.send(err);
        res.json(movie);
    });
};

// delete movie
exports.deleteUser = function(req, res) {
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
