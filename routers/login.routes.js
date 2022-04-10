"use strict";
const { getLogin, login } = require("../controllers/login.controller");
const decorateHTML = require("../middlewares/common/decorateHTML");
const { doLoginValidators, doLoginValidationHandler } = require("../middlewares/login/loginValidator");
const loginRouter = require("express").Router();


loginRouter.route("/")
    .all(
        decorateHTML("Login")
    )
    .get(
        getLogin
    )
    .post(
        doLoginValidators,
        doLoginValidationHandler,
        login
    )


module.exports = loginRouter