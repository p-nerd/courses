const app = require("./app");
const mongo = require("./utils/mongo");
const { APP_PORT, appEnvs, NODE_ENV } = require("./utils/env");
const { logger } = require("./utils/logger");

const server = app.listen(APP_PORT, () => {
    if (NODE_ENV !== appEnvs.testing)
        logger.info(`Listening on port http://localhost:${APP_PORT}`);
    mongo();
});

module.exports = server;