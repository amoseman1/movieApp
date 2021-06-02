const mongoose = require("mongoose");

const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: {
        type: String
    },
    year: {
        type: Number
    },
    rated: {
        type: String
    },
    director: {
        type: String
    },
    actors: {
        type: String
    },
    imdbRating: {
        type: Number
    }

})





const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie