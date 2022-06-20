import express from "express";
import { errorHandler, notRoute } from "./middlewares/errors.js";
import genresRouter from "./routers/genreRouter.js";

const app = express();
app.use(express.json());

app.use("/api/genres", genresRouter);

app.use(notRoute);
app.use(errorHandler);

export default app;
