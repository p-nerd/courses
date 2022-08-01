const auth = require("../middlewares/auth");
const { Rental } = require("../models/rentalModel");
const returnRouter = require("express").Router();
const moment = require("moment");
const Joi = require("joi");
const joiObjectid = require("joi-objectid");
const validate = require("../middlewares/validate");

Joi.objectId = joiObjectid(Joi);

const returnRentalSchema = Joi.object({
    customerId: Joi.objectId().required(),
    movieId: Joi.objectId().required()
});

const returnRental = async (req, res) => {
    const payload = req.body;

    const rental = await Rental.findOne({
        "customer._id": payload.customerId,
        "movie._id": payload.movieId
    });
    if (!rental)
        return res.status(404).send({ message: "rental not found" });

    if (rental.dateReturned)
        return res.status(400).send({ message: "rental already processed" });

    rental.dateReturned = Date.now();
    rental.rentalFee = moment().diff(rental.dateOut, "days") * rental.movie.dailyRentalRate;
    rental.movie.numberInStock++;

    await rental.save();

    return res.status(200).send(rental);
}

returnRouter.post("/", auth, validate(returnRentalSchema), returnRental);

module.exports = returnRouter;
