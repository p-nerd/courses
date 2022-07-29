const { Router } = require("express");
const asyncWrapper = require("../middlewares/asyncWrapper");
const admin = require("../middlewares/admin");
const authenticate = require("../middlewares/authenticate");
const validate = require("../middlewares/validate");
const { Genre } = require("../models/genresModel");
const { createGenreSchema } = require("../models/genresModel");

const createGenre = asyncWrapper(async (req, res, next) => {
    const genre = new Genre(req.body);
    await genre.save();
    return res.status(201).send(genre);
});

const getGenres = asyncWrapper(async (req, res, next) => {
    const genres = await Genre.find();
    // .limit(10)
    // .sort({ name: -1 })
    return res.status(200).send(genres);
});

const getGenre = asyncWrapper(async (req, res) => {
    const id = req.params.id;

    const genre = await Genre.findById(id);
    if (!genre) return res.status(404).send("Genre not found");

    return res.status(200).send(genre);
});


const updateGenre = asyncWrapper(async (req, res) => {
    const id = req.params.id;

    let genre = await Genre.findById(id);
    if (!genre) return res.status(404).send("Genre not found");

    genre = await Genre.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).send(genre);
});

const deleteGenre = asyncWrapper(async (req, res, next) => {
    const id = req.params.id;

    let genre = await Genre.findById(id);
    if (!genre) return res.status(404).send("Genre not found");

    await Genre.findOneAndRemove(id);
    return res.status(200).send("deleted");
});

const genreRouter = Router();

genreRouter
    .route("/")
    .get(getGenres)
    .post(authenticate, validate(createGenreSchema), createGenre);

genreRouter
    .route("/:id")
    .get(getGenre)
    .put(authenticate, updateGenre)
    .delete(authenticate, admin, deleteGenre);

module.exports = genreRouter;
