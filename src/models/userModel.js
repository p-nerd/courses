import Joi from "joi";
import mongoose from "mongoose";

const { Schema, model } = mongoose;

export const User = model("User", new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}));

export const createUserSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required()
});

export const loginUserSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
});
