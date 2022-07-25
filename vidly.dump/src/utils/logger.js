const { createLogger, transports, format } = require("winston");
require("winston-mongodb");
const { appEnvs, MONGODB_URI, NODE_ENV } = require("./env");
const { File, MongoDB, Console } = transports;

const logger = createLogger({
    level: "info",
    format: format.json(),
    transports: [
        new File({ filename: "error.log", level: "error" }),
        new MongoDB({ db: MONGODB_URI, level: "error" })
    ],
    exceptionHandlers: [
        new File({ filename: "exceptions.log" }),
        new Console({ format: format.simple() })
    ]
});

if (NODE_ENV !== appEnvs.production) {
    logger.add(new Console({ format: format.simple() }));
}

export const handleUncaughtException = (err) => {
    logger.error("Uncaught exception detected!", err);
    logger.on("finish", () => {
        process.exit(1);
    });
};

export const handleUnhandledRejection = (err) => {
    throw err;
    // logger.error("Unhandled rejection detected!", err);
    // logger.on("finish", () => {
    //     process.exit(1);
    // });
};

module.exports = logger;