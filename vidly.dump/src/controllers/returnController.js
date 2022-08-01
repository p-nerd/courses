const auth = require("../middlewares/auth");
const { Rental } = require("../models/rentalModel");
const returnRouter = require("express").Router();
const moment = require("moment");
const validate = require("../middlewares/validate");
const { returnRentalSchema } = require("../models/returnModel")

returnRouter.post("/", [auth, validate(returnRentalSchema)], async (req, res) => {
    const { customerId, movieId } = req.body;
    const rental = await Rental.lookup(customerId, movieId);

    if (!rental)
        return res.status(404).send({ message: "rental not found" });

    if (rental.dateReturned)
        return res.status(400).send({ message: "rental already processed" });

    // Information Export Principle
    rental.dateReturned = Date.now();
    rental.rentalFee = moment().diff(rental.dateOut, "days") * rental.movie.dailyRentalRate;
    rental.movie.numberInStock++;
    await rental.save();

    return res.status(200).send(rental);
});

module.exports = returnRouter;
