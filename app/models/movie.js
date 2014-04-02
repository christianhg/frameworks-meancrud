/*
 * module dependencies
 */
var mongoose = require("mongoose");

// movie schema
var movieSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    year: {
        type: Number,
        trim: true
    },
    imdb: {
        type: String,
        trim: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

var Movie = mongoose.model('Movie', movieSchema, 'movies');
module.exports = Movie;
