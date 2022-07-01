import Joi from "joi";
import mongoose from "mongoose";
import passwordComplexity from "joi-password-complexity";

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

const complexityOptions = {
    min: 6,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 2,
};

export const createUserSchema = Joi.object({
    name: Joi.string().min(3).max(255).required(),
    email: Joi.string().min(3).max(255).required(),
    password: passwordComplexity(complexityOptions)
});

export const loginUserSchema = Joi.object({
    email: Joi.string().min(3).max(255).required(),
    password: passwordComplexity(complexityOptions)
});

export const userResponse = user => ({
    _id: user._id,
    name: user.name,
    email: user.email
});
