import express from "express";
import { createUser, getMe, loginUser } from "../controllers/userController.js";
import authenticate from "../middlewares/authenticate.js";
import validate from "../middlewares/validate.js";
import { createUserSchema, loginUserSchema } from "../models/userModel.js";
const userRouter = express.Router();

userRouter.post("/register", validate(createUserSchema), createUser);
userRouter.post("/login", validate(loginUserSchema), loginUser);
userRouter.get("/me", authenticate, getMe)

export default userRouter;