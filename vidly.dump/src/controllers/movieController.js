import asyncMiddleware from "../middlewares/asyncMiddleware.js";
import { Genre } from "../models/genresModel.js";
import { Movie } from "../models/movieModel.js";
import { Router } from "express";
import authenticate from "../middlewares/authenticate.js";
import validate from "../middlewares/validate.js";
import { createMovieSchema } from "../models/movieModel.js";

const createMovie = asyncMiddleware(async (req, res, next) => {
    const payload = req.body;

    const genre = await Genre.findById(payload.genreId);
    if (!genre) return res.status(404).json({ "message": "Specific genre not found" })
    payload.genre = { name: genre.name };

    const movie = new Movie(payload);
    await movie.save();

    return res.status(201).json(movie);
});

const getMovies = asyncMiddleware(async (req, res, next) => {
    const movies = await Movie.find();
    return res.status(200).json(movies);
});


const movieRouter = Router();

movieRouter
    .route("/")
    .post(authenticate, validate(createMovieSchema), createMovie)
    .get(getMovies);

export default movieRouter;