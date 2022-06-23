import express from "express";
import { errorHandler, notRoute } from "./middlewares/errors.js";
import customerRouter from "./routers/customerRouter.js";
import genresRouter from "./routers/genreRouter.js";
import movieRouter from "./routers/movieRouter.js";

const app = express();
app.use(express.json());

app.use("/api/genres", genresRouter);
app.use("/api/customers", customerRouter);
app.use("/api/movies", movieRouter)

app.use(notRoute);
app.use(errorHandler);

export default app;
