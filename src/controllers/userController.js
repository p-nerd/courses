import { User } from "../models/userModel.js";
import { comparePassword, hashPassword } from "../utils/crypto.js";
import { generateToken } from "../utils/jwt.js";

export const createUser = async (req, res, next) => {
    try {
        const payload = req.body;

        const savedUser = await User.findOne({ email: payload.email });
        if (savedUser) return res.status(400).send({ message: "User already exist" });

        payload.password = await hashPassword(payload.password);

        const user = new User(payload);
        await user.save();
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

        const jwtPayload = {
            name: user.name,
            email: user.email,
        }
        const token = await generateToken(jwtPayload);
        return res.status(201).send({ access_token: token });
    } catch (err) {
        return next(err);
    }
};
