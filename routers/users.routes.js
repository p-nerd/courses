"use strict";
const { getUsers } = require("../controllers/users");
const decorateHTML = require("../middlewares/decorateHTML");
const usersRouter = require("express").Router();


usersRouter.get("/", decorateHTML("Users"), getUsers)


module.exports = usersRouter