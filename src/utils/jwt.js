import jsonwebtoken from "jsonwebtoken";

const JWT_EXPIRES_IN_MINUTE = 120;
const JWT_SECRET_KEY = "jwt key";

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
