import { Router } from "express";
import { createUser, loginUser } from "../controllers/userController.js";
import validate from "../middlewares/validate.js";
import { createUserSchema, loginUserSchema } from "../models/userModel.js";
const userRouter = Router();

userRouter
    .route("/register")
    .post(validate(createUserSchema), createUser);

userRouter
    .route("/login")
    .post(validate(loginUserSchema), loginUser);

export default userRouter;