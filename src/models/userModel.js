import Joi from "joi";
import mongoose from "mongoose";

const { Schema, model } = mongoose;

export const User = model("User", new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    email: {
        type: String,
        unique: true,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 1024
    }
}));

export const createUserSchema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().min(3).max(255).required(),
    password: Joi.string().min(6).max(100).required()
});

export const loginUserSchema = Joi.object({
    email: Joi.string().min(3).max(255).required(),
    password: Joi.string().min(6).max(100).required()
});
