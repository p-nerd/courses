import asyncMiddleware from "../middlewares/asyncMiddleware.js";
import { Genre } from "../models/genresModel.js";
import { Router } from "express";
import admin from "../middlewares/admin.js";
import authenticate from "../middlewares/authenticate.js";
import validate from "../middlewares/validate.js";
import { createGenreSchema } from "../models/genresModel.js";

const createGenre = asyncMiddleware(async (req, res, next) => {
    const genre = new Genre(req.body);
    await genre.save();
    return res.status(201).send(genre);
});

const getGenres = asyncMiddleware(async (req, res, next) => {
    const genres = await Genre.find()
        .limit(10)
        .sort({ name: -1 })
        .select({ __v: 0 });
    return res.status(200).send(genres);
});

const getGenre = asyncMiddleware(async (req, res) => {
    const id = req.params.id;

    const genre = await Genre.findById(id);
    if (!genre) return res.status(404).send("Genre not found");

    return res.status(200).send(genre);
});


const updateGenre = asyncMiddleware(async (req, res) => {
    const id = req.params.id;

    let genre = await Genre.findById(id);
    if (!genre) return res.status(404).send("Genre not found");

    genre = await Genre.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).send(genre);
});

const deleteGenre = asyncMiddleware(async (req, res, next) => {
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

export default genreRouter;
