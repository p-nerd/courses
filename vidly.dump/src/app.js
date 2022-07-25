require("express-async-errors");
const express = require("express");
const middlewares = require("./middlewares/index");
const controllers = require("./controllers/index");

const app = express();

middlewares(app);
controllers(app);

module.exports = app;
