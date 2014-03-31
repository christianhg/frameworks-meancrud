/*
 * module dependencies
 */
var mongoose = require("mongoose");

// movie schema
var MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    year: {
        type: Number,
        trim: true
    },
    imdb: {
        type: Number,
        trim: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

var Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;
