import asyncMiddleware from "../middlewares/asyncMiddleware.js";
import { Genre } from "../models/genresModel.js";

export const createGenre = asyncMiddleware(async (req, res, next) => {
    const genre = new Genre(req.body);
    await genre.save();
    return res.status(201).send(genre);
});

export const getGenres = asyncMiddleware(async (req, res, next) => {
    const genres = await Genre.find()
        .limit(10)
        .sort({ name: -1 })
        .select({ __v: 0 });
    return res.status(200).send(genres);
});

export const getGenre = asyncMiddleware(async (req, res) => {
    const id = req.params.id;

    const genre = await Genre.findById(id);
    if (!genre) return res.status(404).send("Genre not found");

    return res.status(200).send(genre);
});


export const updateGenre = asyncMiddleware(async (req, res) => {
    const id = req.params.id;

    let genre = await Genre.findById(id);
    if (!genre) return res.status(404).send("Genre not found");

    genre = await Genre.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).send(genre);
});

export const deleteGenre = asyncMiddleware(async (req, res, next) => {
    const id = req.params.id;

    let genre = await Genre.findById(id);
    if (!genre) return res.status(404).send("Genre not found");

    await Genre.findOneAndRemove(id);
    return res.status(200).send("deleted");
});
