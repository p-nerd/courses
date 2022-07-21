import logger from "../utils/logger.js";

const errorHandler = (err, req, res, next) => {
    logger.error(err);
    return res.status(500).send(err.message + "hello");
};

export default errorHandler;
