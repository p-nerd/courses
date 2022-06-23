import Joi from "joi";
import mongoose from "mongoose";
import { genreSchema } from "./genresModel.js";
const { model, Schema } = mongoose;

export const Movie = model("Movie", new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 255
    },
    genre: {
        type: genreSchema,
        required: true
    },
    numberInStack: {
        type: Number,
        default: 0,
        min: 0,
        max: 255
    },
    dailyRentalRate: {
        type: Number,
        default: 0,
        min: 0,
        max: 255
    }
}));

export const createMovieSchema = Joi.object({
    title: Joi.string().required(),
    genreId: Joi.string().required(),
    numberInStack: Joi.number().min(0).max(255),
    dailyRentalRate: Joi.number().min(0).max(255),
});
