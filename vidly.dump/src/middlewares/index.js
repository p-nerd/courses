import { verifyEnv } from './../utils/env.js';
import { handleUnhandledRejection } from './../utils/logger.js';
import express from "express";


export default app => {
    // process.on("uncaughtException", handleUncaughtException);
    // process.on("unhandledRejection", handleUnhandledRejection);

    // throw new Error("Normal error");

    // const a = Promise.reject("Async error");
    // a.then();

    verifyEnv();
    app.use(express.json());
}