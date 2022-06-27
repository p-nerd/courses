import express from "express";
import mongo from "./mongo.js";
import { errorHandler, notRoute } from "./middlewares/errors.js";
import customerRouter from "./routers/customerRouter.js";
import genresRouter from "./routers/genreRouter.js";
import movieRouter from "./routers/movieRouter.js";
import rentalRouter from "./routers/rentalRouter.js";
import userRouter from "./routers/userRouter.js";

const app = express();
app.use(express.json());

mongo();

app.use("/api/genres", genresRouter);
app.use("/api/customers", customerRouter);
app.use("/api/movies", movieRouter)
app.use("/api/rentals", rentalRouter)
app.use("/api/users", userRouter)

app.use(notRoute);
app.use(errorHandler);

export default app;
