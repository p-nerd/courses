import express from "express";
import { createCustomer, getCustomer, getCustomers, updateCustomer, deleteCustomer } from "../controllers/customerController.js";
import validate from "../middlewares/validate.js";
import { customerCreateSchema, customerUpdateSchema } from "../models/customerModel.js";

const customerRouter = express.Router();

customerRouter
    .route("/")
    .post(validate(customerCreateSchema), createCustomer)
    .get(getCustomers);

customerRouter
    .route("/:id")
    .get(getCustomer)
    .put(validate(customerUpdateSchema), updateCustomer)
    .delete(deleteCustomer);

export default customerRouter;

