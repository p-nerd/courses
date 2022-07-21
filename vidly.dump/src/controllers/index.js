import customerRouter from "./customerController.js";
import genresRouter from "./genresController.js";
import movieRouter from "./movieController.js";
import rentalRouter from "./rentalController.js";
import userRouter from "./userController.js";
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
