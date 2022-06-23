import { Genre } from "../models/genresModel.js";
import { Movie } from "../models/movieModel.js";

export const createMovie = async (req, res, next) => {
    try {
        const payload = req.body;

        const genre = await Genre.findById(payload.genreId);
        if (!genre) return res.status(404).json({ "message": "Specific genre not found" })
        payload.genre = { name: genre.name };

        const movie = new Movie(payload);
        const savedMovie = await movie.save();

        return res.status(201).json(savedMovie);
    } catch (err) {
        return next(err);
    }
};

export const getMovies = async (req, res, next) => {
    try {
        const movies = await Movie.find();
        return res.status(200).json(movies);
    } catch (err) {
        return next(err);
    }
};
