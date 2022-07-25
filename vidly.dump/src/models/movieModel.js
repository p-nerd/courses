const Joi = require("joi");
const mongoose = require("mongoose");
const { genreSchema } = require("./genresModel");
const joiObjectid = require("joi-objectid");

const { model, Schema } = mongoose;
Joi.objectId = joiObjectid(Joi);

const Movie = model("Movie", new Schema({
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

const createMovieSchema = Joi.object({
    title: Joi.string().required(),
    genreId: Joi.objectId().required(),
    numberInStack: Joi.number().min(0).max(255),
    dailyRentalRate: Joi.number().min(0).max(255),
});

module.exports = { Movie, createMovieSchema }