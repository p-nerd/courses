"use strict";
const { getUsers, addUser, deleteUser } = require("../controllers/users");
const decorateHTML = require("../middlewares/common/decorateHTML");
const avatarUpload = require("../middlewares/users/avatarUpload");
const { addUserValidators, addUserValidationHandler } = require("../middlewares/users/userValidator");
const usersRouter = require("express").Router();


usersRouter.route("/")
    .get(
        decorateHTML("Users"),
        getUsers
    )
    .post(
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

