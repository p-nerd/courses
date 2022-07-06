import { Router } from "express";
import { createMovie, getMovies } from "../controllers/movieController.js";
import authenticate from "../middlewares/authenticate.js";
import validate from "../middlewares/validate.js";
import { createMovieSchema } from "../models/movieModel.js";
const movieRouter = Router();

movieRouter
    .route("/")
    .post(authenticate, validate(createMovieSchema), createMovie)
    .get(getMovies);

export default movieRouter;