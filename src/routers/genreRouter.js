import express from "express";
import { getGenres, getGenre, createGenre, updateGenre, deleteGenre } from "../controllers/genresController.js";
import authenticate from "../middlewares/authenticate.js";
import validate from "../middlewares/validate.js";
import { createGenreSchema } from "../models/genresModel.js";
const genreRouter = express.Router();

genreRouter
    .route("/")
    .get(getGenres)
    .post(authenticate, validate(createGenreSchema), createGenre);

genreRouter
    .route("/:id")
    .get(getGenre)
    .put(authenticate, updateGenre)
    .delete(authenticate, deleteGenre);

export default genreRouter;
