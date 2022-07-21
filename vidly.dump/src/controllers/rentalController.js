import { Customer } from "../models/customerModel.js";
import { Movie } from "../models/movieModel.js";
import { Rental } from "../models/rentalModel.js";
import Fawn from "fawn";
import { Router } from "express";
import authenticate from "../middlewares/authenticate.js";
import validate from "../middlewares/validate.js";
import { createRentalSchema } from "../models/rentalModel.js";
import { createRental, getRentals } from "./../controllers/rentalController.js"

const createRental = async (req, res, next) => {
    try {
        const customer = await Customer.findById(req.body.customerId);
        if (!customer) return res
            .status(404)
            .json({ "message": "Customer not found" })

        const movie = await Movie.findById(req.body.movieId)
        if (!movie) return res
            .status(404)
            .json({ "message": "Movie not found" });

        if (movie.numberInStack <= 0) return res
            .status(400)
            .json({ "message": "Movie not in stack" })

        const rental = new Rental({ customer, movie });
        // const savedRental = await rental.save();

        // movie.numberInStack--;
        // await movie.save();

        const task = new Fawn.Task();
        task
            .save('rentals', rental)
            .update("movies", { _id: movie._id }, { $inc: { numberInStack: -1 } })
            .run();

        return res.status(201).json(rental);
    } catch (err) {
        console.log(err);
        return next(err);
    }
};

const getRentals = async (req, res, next) => {
    try {
        const rentals = await Rental
            .find()
            .sort({ dateOut: -1 });

        return res
            .status(200)
            .json(rentals);
    } catch (err) {
        return next(err);
    }
};

const rentalRouter = Router();

rentalRouter
    .route("/")
    .post(authenticate, validate(createRentalSchema), createRental)
    .get(getRentals);

export default rentalRouter;