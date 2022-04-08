require("dotenv").config()


const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;
const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;
const COOKIE_SECRET = process.env.COOKIE_SECRET;
const APP_TITLE = process.env.APP_TITLE;

module.exports = {
    NODE_ENV,
    PORT,
    MONGODB_CONNECTION_STRING,
    COOKIE_SECRET,
    APP_TITLE
}