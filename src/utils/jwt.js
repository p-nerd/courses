import jsonwebtoken from "jsonwebtoken";
import { JWT_EXPIRES_IN_MINUTE, JWT_SECRET_KEY } from "./env.js";

export const generateToken = (payload) =>
    new Promise((resolve, reject) => {
        jsonwebtoken.sign(
            payload,
            JWT_SECRET_KEY,
            { expiresIn: JWT_EXPIRES_IN_MINUTE },
            (err, token) => {
                if (err) return reject(err);
                return resolve(token);
            }
        );
    });

export const compareToken = (token) =>
    new Promise((resolve, reject) => {
        jsonwebtoken.verify(token, JWT_SECRET_KEY, (err, decoded) => {
            if (err) return reject(err);
            return resolve(decoded);
        });
    });
