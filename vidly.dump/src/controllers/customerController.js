import { Customer } from "./../models/customerModel.js";

// this controller using the express-async-errors module feature

export const createCustomer = async (req, res, next) => {
    const customer = new Customer(req.body);
    await customer.save();
    return res.status(201).json(customer);
};

export const getCustomers = async (req, res, next) => {
    const customers = await Customer.find({});
    return res.status(200).json(customers);
};

export const getCustomer = async (req, res, next) => {
    const customer = await Customer.findById(req.params.id);
    if (!customer) return res.status(404).json({ message: "Customer not found" });
    return res.status(200).json(customer);
};

export const updateCustomer = async (req, res, next) => {
    const id = req.params.id;

    const customer = await Customer.findById(id);
    if (!customer) return res.status(404).json({ message: "Customer not found" });

    const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).json(updatedCustomer);
};

export const deleteCustomer = async (req, res, next) => {
    const customer = await Customer.findById(req.params.id);
    if (!customer) return res.status(404).json({ message: "Customer not found" });

    await Customer.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Customer deleted" });
};

