import { Router } from "express";
import authenticate from "../middlewares/authenticate.js";
import validate from "../middlewares/validate.js";
import { createRentalSchema } from "../models/rentalModel.js";
import { createRental, getRentals } from "./../controllers/rentalController.js"
const rentalRouter = Router();

rentalRouter
    .route("/")
    .post(authenticate, validate(createRentalSchema), createRental)
    .get(getRentals);

export default rentalRouter;