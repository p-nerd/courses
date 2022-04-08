"use strict";
const { getLogin } = require("../controllers/login");
const decorateHTML = require("../middlewares/decorateHTML");
const loginRouter = require("express").Router();


loginRouter.get("/", decorateHTML("Login"), getLogin)


module.exports = loginRouter