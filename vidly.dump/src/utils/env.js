require("dotenv").config();

const appEnvs = {
    development: "development",
    testing: "test",
    production: "production"
};

const JWT_EXPIRES_IN_MINUTE = parseInt(process.env.JWT_EXPIRES_IN_MINUTE);
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const APP_PORT = parseInt(process.env.APP_PORT);
const NODE_ENV = process.env.NODE_ENV;
const MONGODB_URI = NODE_ENV == appEnvs.testing
    ? process.env.MONGODB_URI + "-testing" : process.env.MONGODB_URI;

const verifyEnv = () => {
    if (!APP_PORT)
        throw new Error("Must have APP_PORT in env");
    if (!MONGODB_URI)
        throw new Error("Must have MONGODB_URI in env")
    if (!JWT_SECRET_KEY)
        throw new Error("Must have JWT_SECRET_KEY in env");
    if (!JWT_EXPIRES_IN_MINUTE)
        throw new Error("Must have JWT_EXPIRES_IN_MINUTE in env");
};

module.exports = {
    JWT_EXPIRES_IN_MINUTE,
    JWT_SECRET_KEY,
    APP_PORT,
    NODE_ENV,
    MONGODB_URI,
    appEnvs,
    verifyEnv
}
