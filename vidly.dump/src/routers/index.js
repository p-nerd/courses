import customerRouter from "./customerRouter.js";
import genresRouter from "./genreRouter.js";
import movieRouter from "./movieRouter.js";
import rentalRouter from "./rentalRouter.js";
import userRouter from "./userRouter.js";
import errorHandler from "./../middlewares/errorHandler.js";
import notRoute from './../middlewares/notRoute.js';

export default app => {
    app.use("/genres", genresRouter);
    app.use("/customers", customerRouter);
    app.use("/movies", movieRouter)
    app.use("/rentals", rentalRouter)
    app.use("/users", userRouter)
    app.use(notRoute);
    app.use(errorHandler);
};
