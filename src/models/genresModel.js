import mongoose from "mongoose";
import Joi from "joi";

export const CreateGenreSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
});

const genresSchema = new mongoose.Schema({
    name: { type: String }
})

export const Genre = mongoose.model("Genre", genresSchema);
