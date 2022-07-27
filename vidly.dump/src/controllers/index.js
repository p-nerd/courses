const customerRouter = require("./customerController");
const genresRouter = require("./genresController");
const movieRouter = require("./movieController");
const rentalRouter = require("./rentalController");
const userRouter = require("./userController");
const errorHandler = require("./../middlewares/errorHandler");
const notRoute = require("./../middlewares/notRoute");

module.exports = app => {
    app.use("/api/genres", genresRouter);
    app.use("/api/customers", customerRouter);
    app.use("/api/movies", movieRouter)
    app.use("/api/rentals", rentalRouter)
    app.use("/api/users", userRouter)
    app.use(notRoute);
    app.use(errorHandler);
};
