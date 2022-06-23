import { Customer } from "../models/customerModel.js";
import { Movie } from "../models/movieModel.js";
import { Rental } from "../models/rentalModel.js";

export const createRental = async (req, res, next) => {
    try {
        const customer = await Customer.findById(req.body.customerId);
        if (!customer) return res.status(404).json({ "message": "Customer not found" })

        const movie = await Movie.findById(req.body.movieId)
        if (!movie) return res.status(404).json({ "message": "Movie not found" });

        const rental = new Rental({ customer, movie });
        const savedRental = await rental.save();
        return res.status(201).json(savedRental);
    } catch (err) {
        console.log(err);
        return next(err);
    }
};

export const getRentals = async (req, res, next) => {
    try {
        const rentals = await Rental.find().sort({ dateOut: -1 });
        return res.status(200).json(rentals);
    } catch (err) {
        return next(err);
    }
};
