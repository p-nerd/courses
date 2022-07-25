const app = require("./app");
const mongo = require("./utils/mongo");
const { APP_PORT } = require("./utils/env");

app.listen(APP_PORT, () => {
    console.log(`Listening on port http://localhost:${APP_PORT}`);
    mongo();
});
