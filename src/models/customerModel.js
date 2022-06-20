import Joi from "joi";
import mongoose from "mongoose"

export const customerCreateSchema = Joi.object({
    name: Joi.string().max(50).min(5).required(),
    phone: Joi.string().required(),
    isGold: Joi.boolean(),
    email: Joi.string().email(),
});

export const customerUpdateSchema = Joi.object({
    name: Joi.string().max(50).min(5).optional(),
    phone: Joi.string().optional(),
    isGold: Joi.boolean().optional(),
    email: Joi.string().email().optional(),
}).or("name", "phone", "isGold", "email").required();

export const Customer = mongoose.model(
    "Customer",
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
            maxlength: 50,
            minlength: 5,
        },
        email: {
            type: String,
            unique: true
        },
        phone: {
            type: String,
            required: true,
            unique: true,
            maxlength: 8,
            minlength: 20,
        },
        isGold: {
            type: Boolean,
            default: false
        }
    })
);

