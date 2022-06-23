import { Router } from "express";
import validate from "../middlewares/validate.js";
import { createRentalSchema } from "../models/rentalModel.js";
import { createRental, getRentals } from "./../controllers/rentalController.js"
const rentalRouter = Router();

rentalRouter
    .route("/")
    .post(validate(createRentalSchema), createRental)
    .get(getRentals);

export default rentalRouter;