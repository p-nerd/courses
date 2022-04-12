"use strict";
const { getUsers, addUser, deleteUser } = require("../controllers/users.controller");
const authGuard = require("../middlewares/common/auth.middleware");
const decorateHTML = require("../middlewares/common/decorateHTML.middleware");
const avatarUpload = require("../middlewares/users/avatarUpload.middleware");
const { addUserValidators, addUserValidationHandler } = require("../middlewares/users/userValidator.middleware");
const usersRouter = require("express").Router();


usersRouter.route("/")
    .get(
        decorateHTML("Users"),
        authGuard,
        getUsers
    )
    .post(
        authGuard,
        avatarUpload,
        addUserValidators,
        addUserValidationHandler,
        addUser
    );

usersRouter.route("/:id")
    .delete(
        deleteUser
    );


module.exports = usersRouter

