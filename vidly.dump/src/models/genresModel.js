const mongoose = require("mongoose");
const Joi = require("joi");
const { model, Schema } = mongoose;

const createGenreSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
});

const genreSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
});

const Genre = model("Genre", genreSchema);

module.exports = { createGenreSchema, genreSchema, Genre };