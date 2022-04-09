"use strict";
const { getUsers } = require("../controllers/users");
const decorateHTML = require("../middlewares/common/decorateHTML");
const avatarUpload = require("../middlewares/users/avatarUpload");
const usersRouter = require("express").Router();


usersRouter.get("/", decorateHTML("Users"), getUsers)
usersRouter.post("/", avatarUpload)

module.exports = usersRouter

