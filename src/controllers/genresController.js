import { Genre } from "../models/genresModel.js";

export const getGenres = async (req, res, next) => {
    try {
        console.log("Here");
        const genres = await Genre.find()
            .limit(10)
            .sort({ name: -1 })
            .select({ __v: 0 });
        return res.status(200).send(genres);
    } catch (err) {
        next(err);
    }
};

export const getGenre = (req, res) => {
    const id = parseInt(req.params.id);
    const genre = __find(genres, id);

    return res.status(200).send(genre);
};

export const createGenre = async (req, res, next) => {
    try {
        const genre = new Genre(req.body);
        const savedGenre = await genre.save();
        return res.status(201).send(savedGenre);
    } catch (err) {
        next(err);
    }
};

export const updateGenre = (req, res) => {
    const id = parseInt(req.params.id);
    let genre = __find(genres, id);
    if (!genre) {
        return res.status(404).send("Genre not found with given id");
    }

    const result = __validate(req.body);
    if (result.error) {
        return res.status(400).send(result.error.details[0].message);
    }
    genre.name = result.value.name;
    __update(genres, genre);
    return res.status(201).send(genre);
};

export const deleteGenre = (req, res) => {
    const id = parseInt(req.params.id);
    let genre = __find(genres, id);
    if (!genre) {
        return res.status(404).send("Genre not found with given id");
    }

    __delete(genres, genre);
    return res.status(200).send("Deleted successfully");
};
