import mongoose from "mongoose";
import Fawn from "fawn";
import { MONGODB_URI } from "./env.js";
import logger from "./logger.js";

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

export default mongo;