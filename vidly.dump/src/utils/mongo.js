const mongoose = require("mongoose");
const Fawn = require("fawn");
const { MONGODB_URI } = require("./env");
const logger = require("./logger");

const mongo = () => {
    try {
        mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        logger.info("Connection with mongodb successful! with " + MONGODB_URI);
        Fawn.init(MONGODB_URI);
    }
    catch (err) {
        logger.error("Mongodb connection failure!! with " + MONGODB_URI + "\n", `error: ${err}`);
        process.exit(1);
    }
};

module.exports = mongo;