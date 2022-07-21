import 'express-async-errors';
import express from "express";
import errorHandler from "./middlewares/errorHandler.js";
import router from "./routers/index.js";
import notRoute from './middlewares/notRoute.js';
import { verifyEnv } from './utils/env.js';
import { handleUncaughtException, handleUnhandledRejection } from './utils/logger.js';

const app = express();

// process.on("uncaughtException", handleUncaughtException);
process.on("unhandledRejection", handleUnhandledRejection);

// throw new Error("Normal error");

// const a = Promise.reject("Async error");
// a.then();

verifyEnv();
app.use(express.json());
app.use("/api", router)
app.use(notRoute);
app.use(errorHandler);

export default app;
