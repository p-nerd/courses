require('express-async-errors');
const express = require("express");
const middlewares = require('./middlewares/index.js');
const controllers = require('./controllers/index.js');

const app = express();

middlewares(app);
controllers(app);

module.exports = app;
