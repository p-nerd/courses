import Joi from "joi";
import mongoose from "mongoose"

export const customerCreateSchema = Joi.object({
    name: Joi.string().max(50).min(5).required(),
    phone: Joi.string().required(),
    isGold: Joi.boolean(),
});

export const customerUpdateSchema = Joi.object({
    name: Joi.string().max(50).min(5).optional(),
    phone: Joi.string().optional(),
    isGold: Joi.boolean().optional(),
}).or("name", "phone", "isGold").required();

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 5,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        minlength: 8,
        maxlength: 20,
    },
    isGold: {
        type: Boolean,
        default: false
    }
});

export const Customer = mongoose.model("Customer", customerSchema);
