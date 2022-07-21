import logger from "../utils/logger.js";

export default (err, req, res, next) => {
    logger.error(err);
    return res.status(500).send(err.message + "hello");
};
