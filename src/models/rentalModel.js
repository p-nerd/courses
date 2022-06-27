import Joi from "joi";
import mongoose from "mongoose";
import joiObjectid from "joi-objectid";

const { model, Schema } = mongoose;
Joi.objectId = joiObjectid(Joi);

const movieInRentalSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 255
    },
    dailyRentalRate: {
        type: Number,
        default: 0,
        min: 0,
        max: 255
    }
});

const customerInRentalSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50,
        minlength: 5,
    },
    phone: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 20,
    },
    isGold: {
        type: Boolean,
        default: false
    }
})

export const Rental = model("Rental", new Schema({
    customer: {
        type: customerInRentalSchema,
        required: true
    },
    movie: {
        type: movieInRentalSchema,
        required: true
    },
    dateOut: {
        type: Date,
        required: true,
        default: Date.now()
    },
    dateReturned: {
        type: Date
    },
    rentalFee: {
        type: Number,
        min: 0,
        default: 0
    }
}));

export const createRentalSchema = Joi.object({
    customerId: Joi.objectId().required(),
    movieId: Joi.objectId().required(),
});
