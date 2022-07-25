const customerRouter = require("./customerController");
const genresRouter = require("./genresController");
const movieRouter = require("./movieController");
const rentalRouter = require("./rentalController");
const userRouter = require("./userController");
const errorHandler = require("./../middlewares/errorHandler");
const notRoute = require('./../middlewares/notRoute.js');

module.exports = app => {
    app.use("/genres", genresRouter);
    app.use("/customers", customerRouter);
    app.use("/movies", movieRouter)
    app.use("/rentals", rentalRouter)
    app.use("/users", userRouter)
    app.use(notRoute);
    app.use(errorHandler);
};
