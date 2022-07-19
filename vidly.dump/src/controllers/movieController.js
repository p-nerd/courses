import asyncMiddleware from "../middlewares/asyncMiddleware.js";
import { Genre } from "../models/genresModel.js";
import { Movie } from "../models/movieModel.js";

export const createMovie = asyncMiddleware(async (req, res, next) => {
    const payload = req.body;

    const genre = await Genre.findById(payload.genreId);
    if (!genre) return res.status(404).json({ "message": "Specific genre not found" })
    payload.genre = { name: genre.name };

    const movie = new Movie(payload);
    await movie.save();

    return res.status(201).json(movie);
});

export const getMovies = asyncMiddleware(async (req, res, next) => {
    const movies = await Movie.find();
    return res.status(200).json(movies);
});
