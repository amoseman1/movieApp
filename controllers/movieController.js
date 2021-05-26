import { Movie } from "../models/Movie"

export const addNewMovie = (req, res) => {
    let newMovie = new Movie(req.body);

    newMovie.save((err, Movie) => {
        if (err) {
            res.send(err)
        } res.json(Movie)
    });
};