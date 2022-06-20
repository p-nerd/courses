import { Genre } from "../models/genresModel.js";

export const createGenre = async (req, res, next) => {
    try {
        let genre = new Genre(req.body);
        genre = await genre.save();
        return res.status(201).send(genre);
    } catch (err) {
        return next(err);
    }
};

export const getGenres = async (req, res, next) => {
    try {
        const genres = await Genre.find()
            .limit(10)
            .sort({ name: -1 })
            .select({ __v: 0 });
        return res.status(200).send(genres);
    } catch (err) {
        return next(err);
    }
};

export const getGenre = async (req, res) => {
    try {
        const id = req.params.id;

        const genre = await Genre.findById(id);
        if (!genre) return res.status(404).send("Genre not found");

        return res.status(200).send(genre);
    } catch (err) {
        return next(err);
    }
};


export const updateGenre = (req, res) => {
    try {
        const id = req.params.id;

        let genre = Genre.findById(id);
        if (!genre) return res.status(404).send("Genre not found");

        genre = Genre.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).send(genre);
    } catch (err) {
        return next(err);
    }
};

export const deleteGenre = async (req, res, next) => {
    try {
        const id = req.params.id;

        let genre = await Genre.findById(id);
        if (!genre) return res.status(404).send("Genre not found");

        await Genre.findOneAndRemove(id);
        return res.status(200).send("deleted");
    } catch (err) {
        return next(err);
    }
};
