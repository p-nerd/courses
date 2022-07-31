const auth = require("../middlewares/auth");
const { Rental } = require("../models/rentalModel");
const returnRouter = require("express").Router();

returnRouter.post("/", auth, async (req, res) => {
    const payload = req.body;
    if (!payload.customerId)
        return res.status(400).send({ message: "customerId is not found" });
    if (!payload.movieId)
        return res.status(400).send({ message: "movieId is not found" });

    const rental = await Rental.findOne({
        "customer._id": payload.customerId,
        "movie._id": payload.movieId
    });
    if (!rental)
        return res.status(404).send({ message: "rental not found" });

    if (rental.dateReturned)
        return res.status(400).send({ message: "rental already processed" });

    rental.dateReturned = Date.now();
    rental.rentalFee = (rental.dateReturned - rental.dateOut) * rental.movie.dailyRentalRate;
    await rental.save();

    return res.status(200).send(rental);
});

module.exports = returnRouter;
