import app from "./app.js"
import mongo from "./utils/mongo.js";
import { APP_PORT } from "./utils/env.js";

app.listen(APP_PORT, () => {
    console.log(`Listening on port http://localhost:${APP_PORT}`);
    mongo();
});
