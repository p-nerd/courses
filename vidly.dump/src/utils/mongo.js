const mongoose = require("mongoose");
const Fawn = require("fawn");
const { MONGODB_URI, runNotInTest } = require("./env");
const { logger } = require("./logger");

const mongo = () => {
    try {
        mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        runNotInTest(() => {
            logger.info(`Connection with mongodb successful! with ${MONGODB_URI}`);
        });
        Fawn.init(MONGODB_URI);
    }
    catch (err) {
        runNotInTest(() => {
            logger.error(`Mongodb connection failure!! with ${MONGODB_URI} \n error: ${err}`);
        });
        process.exit(1);
    }
};

module.exports = mongo;