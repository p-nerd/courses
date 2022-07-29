const { Router } = require("express");
const asyncWrapper = require("../middlewares/asyncWrapper");
const authenticate = require("../middlewares/authenticate");
const validate = require("../middlewares/validate");
const { Movie } = require("../models/movieModel");
const { Genre } = require("../models/genresModel");
const { createMovieSchema } = require("../models/movieModel");

const createMovie = asyncWrapper(async (req, res, next) => {
    const payload = req.body;

    const genre = await Genre.findById(payload.genreId);
    if (!genre) return res.status(404).json({ "message": "Specific genre not found" })
    payload.genre = { name: genre.name };

    const movie = new Movie(payload);
    await movie.save();

    return res.status(201).json(movie);
});

const getMovies = asyncWrapper(async (req, res, next) => {
    const movies = await Movie.find();
    return res.status(200).json(movies);
});


const movieRouter = Router();

movieRouter
    .route("/")
    .post(authenticate, validate(createMovieSchema), createMovie)
    .get(getMovies);

module.exports = movieRouter;