import express from "express";
import { createCustomer, getCustomer, getCustomers, updateCustomer, deleteCustomer } from "../controllers/customerController.js";
import authenticate from "../middlewares/authenticate.js";
import validate from "../middlewares/validate.js";
import { customerCreateSchema, customerUpdateSchema } from "../models/customerModel.js";

const customerRouter = express.Router();

customerRouter
    .route("/")
    .post(authenticate, validate(customerCreateSchema), createCustomer)
    .get(getCustomers);

customerRouter
    .route("/:id")
    .get(getCustomer)
    .put(authenticate, validate(customerUpdateSchema), updateCustomer)
    .delete(authenticate, deleteCustomer);

export default customerRouter;

