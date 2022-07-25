const app = require("./app");
const mongo = require("./utils/mongo");
const { APP_PORT } = require("./utils/env");
const { logger } = require("./utils/logger");

app.listen(APP_PORT, () => {
    logger.info(`Listening on port http://localhost:${APP_PORT}`);
    mongo();
});
