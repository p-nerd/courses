import app from "./app.js"
import mongo from "./mongo.js";
import { APP_PORT } from "./utils/env.js";

app.listen(APP_PORT, async () => {
    console.log(`Listening on port http://localhost:${APP_PORT}`);
    await mongo();
});
