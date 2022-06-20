import { Customer } from "../models/customerModel.js";

export const createCustomer = async (req, res, next) => {
    try {
        const customer = new Customer(req.body);
        const savedCustomer = await customer.save(customer);
        return res.status(201).json(savedCustomer);
    } catch (err) {
        return next(err);
    }
};

export const getCustomers = async (req, res, next) => {
    try {
        const customers = await Customer.find({});
        return res.status(200).json(customers);
    } catch (err) {
        return next(err);
    }
};

export const getCustomer = async (req, res, next) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) return res.status(404).json({ message: "Customer not found" });
        return res.status(200).json(customer);
    } catch (err) {
        return next(err);
    }
};

export const updateCustomer = async (req, res, next) => {
    try {
        const id = req.params.id;

        const customer = await Customer.findById(id);
        if (!customer) return res.status(404).json({ message: "Customer not found" });

        const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).json(updatedCustomer);
    } catch (err) {
        return next(err);
    }
};

export const deleteCustomer = async (req, res, next) => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) return res.status(404).json({ message: "Customer not found" });

        await Customer.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "Customer deleted" });
    } catch (err) {
        return next(err);
    }
};

