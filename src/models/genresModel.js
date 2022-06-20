import mongoose from "mongoose";
import Joi from "joi";

export const CreateGenreSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
});

export const Genre = mongoose.model("Genre", new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
}));
