import express from "express";
import { getGenres, getGenre, createGenre, updateGenre, deleteGenre } from "../controllers/genresController.js";
import validate from "../middlewares/validate.js";
import { CreateGenreSchema } from "../models/genresModel.js";
const genreRouter = express.Router();

genreRouter
    .route("/")
    .get(getGenres)
    .post(validate(CreateGenreSchema), createGenre);

genreRouter
    .route("/:id")
    .get(getGenre)
    .put(updateGenre)
    .delete(deleteGenre);

export default genreRouter;
