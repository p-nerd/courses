const app = require("./app");
const { APP_PORT, NODE_ENV } = require("./utils/env");
const { logger } = require("./utils/logger");

app.listen(APP_PORT, () => {
    if (NODE_ENV !== "test") logger.info(`Listening on port http://localhost:${APP_PORT}`);
});
