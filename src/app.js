import express from "express";
import errorHandler from "./middlewares/errorHandler.js";
import router from "./routers/index.js";

const app = express();
app.use(express.json());

app.use("/api", router)

app.use((req, res) => {
    return res.status(404).send("route not found");
});
app.use(errorHandler);

export default app;
