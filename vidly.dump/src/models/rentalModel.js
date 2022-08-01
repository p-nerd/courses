const Joi = require("joi");
const mongoose = require("mongoose");
const joiObjectid = require("joi-objectid");
const { movieSchema } = require("./movieModel");

const { model, Schema } = mongoose;
Joi.objectId = joiObjectid(Joi);

const customerInRentalSchema = new Schema({
    name: { type: String, required: true, minlength: 5, maxlength: 50 },
    phone: { type: String, required: true, minlength: 8, maxlength: 20 },
    isGold: { type: Boolean, default: false }
});

const Rental = model("Rental", new Schema({
    customer: { type: customerInRentalSchema, required: true },
    movie: { type: movieSchema, required: true },
    dateOut: { type: Date, required: true, default: Date.now() },
    dateReturned: { type: Date },
    rentalFee: { type: Number, min: 0, default: 0 }
}));

const createRentalSchema = Joi.object({
    customerId: Joi.objectId().required(),
    movieId: Joi.objectId().required(),
});

module.exports = { Rental, createRentalSchema };