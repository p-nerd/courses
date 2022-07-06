import { User } from "../models/userModel.js";
import { comparePassword, hashPassword } from "../utils/hash.js";
import _ from "lodash";

export const createUser = async (req, res, next) => {
    try {
        const payload = req.body;

        let user = await User.findOne({ email: payload.email });
        if (user) return res.status(400).send({ message: "User already exist" });

        payload.password = await hashPassword(payload.password);

        user = new User(_.pick(payload, "name", "email", "password"));
        await user.save();

        const token = await user.generateToken2();
        res.set("x-auth-token", token)
        return res.status(201).send(user);
    } catch (err) {
        return next(err);
    }
};

export const loginUser = async (req, res, next) => {
    try {
        const payload = req.body;
        const user = await User.findOne({ email: payload.email });
        if (!user) return res.status(404).send("User not found by the email");

        const isValidPassword = await comparePassword(payload.password, user.password);
        if (!isValidPassword) return res.status(401).send("Password not matching");

        const token = await user.generateToken2();
        return res.status(201).send({ access_token: token });
    } catch (err) {
        return next(err);
    }
};

export const getMe = async (req, res, next) => {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId);
        if (!user) return res.status(404).send("User not found");
        return res.status(200).send(user);
    } catch (err) {
        return next(err);
    }
};
