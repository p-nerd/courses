import mongoose from "mongoose";
import Joi from "joi";
const { model, Schema } = mongoose;


export const createGenreSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
});

export const genreSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
});

export const Genre = model("Genre", genreSchema);
