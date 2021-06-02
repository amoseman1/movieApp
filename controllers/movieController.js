// import { Movie } from "../models/Movie"
const db = require("../models")

// export const addNewMovie = (req, res) => {
//     let newMovie = new Movie(req.body);

//     newMovie.save((err, Movie) => {
//         if (err) {
//             res.send(err)
//         } res.json(Movie)
//     });
// };

module.exports = {
    create: function (req, res) {
        db.Movie
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))

    },
    // findAll: function (req, res) {
    //     db.Movie
    //         .find(req.query)
    //         .sort({ date: -1 })
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // }
}