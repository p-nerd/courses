import app from "./core/app";
import { connect } from "./core/mongo";

const port = 5000;

app.listen(port, async () => {
    console.log(`Server listening on http://localhost:${port}`);
    await connect();
});
