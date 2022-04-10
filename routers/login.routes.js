"use strict";
const { getLogin } = require("../controllers/login.controller");
const decorateHTML = require("../middlewares/common/decorateHTML");
const loginRouter = require("express").Router();


loginRouter.get("/", decorateHTML("Login"), getLogin)


module.exports = loginRouter