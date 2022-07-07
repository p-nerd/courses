import { Customer } from "../models/customerModel.js";
import { Movie } from "../models/movieModel.js";
import { Rental } from "../models/rentalModel.js";
import Fawn from "fawn";
import asyncMiddleware from "../middlewares/asyncMiddleware.js";

export const createRental = asyncMiddleware(async (req, res, next) => {
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
});

export const getRentals = asyncMiddleware(async (req, res, next) => {
    const rentals = await Rental
        .find()
        .sort({ dateOut: -1 });

    return res
        .status(200)
        .json(rentals);
});
