import mongoose from 'mongoose';

const Schema = mongoose.Schema

const MovieSchema = new Schema({
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





const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie