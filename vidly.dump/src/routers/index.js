import express from "express";
import customerRouter from "./customerRouter.js";
import genresRouter from "./genreRouter.js";
import movieRouter from "./movieRouter.js";
import rentalRouter from "./rentalRouter.js";
import userRouter from "./userRouter.js";

const router = express.Router();

router.use("/genres", genresRouter);
router.use("/customers", customerRouter);
router.use("/movies", movieRouter)
router.use("/rentals", rentalRouter)
router.use("/users", userRouter)

export default router;
