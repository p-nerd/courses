const { verifyEnv } = require('./../utils/env.js');
const { handleUnhandledRejection } = require('./../utils/logger.js');
const express = require("express");


module.exports = app => {
    // process.on("uncaughtException", handleUncaughtException);
    // process.on("unhandledRejection", handleUnhandledRejection);

    // throw new Error("Normal error");

    // const a = Promise.reject("Async error");
    // a.then();

    verifyEnv();
    app.use(express.json());
}