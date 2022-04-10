"use strict";
const User = require("../models/People");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwt");
const { JWT_COOKIE_NAME, JWT_EXPIRES_IN } = require("../utils/config");
const createError = require("http-errors");


const getLogin = (req, res, next) => {
    res.render("index")
}


const login = async (req, res, next) => {
    try {
        const user = await User.findOne({
            $or: [
                { email: req.body.username },
                { mobile: req.body.username }
            ],
        })

        if (user && user._id) {
            const isValidPassword = await bcrypt.compare(
                req.body.password,
                user.password
            )
            if (isValidPassword) {
                const userObject = {
                    name: user.name,
                    mobile: user.mobile,
                    email: user.email,
                    role: "user"
                }
                const token = generateToken(userObject)
                res.cookie(JWT_COOKIE_NAME, token, {
                    maxAge: JWT_EXPIRES_IN,
                    httpOnly: true,
                    signed: true,
                })
                res.locals.loggedInUser = userObject;

                res.render("inbox");
            } else {
                throw createError("Login failed! Please try again!")
            }
        } {
            throw createError("Login failed! Please try again!")
        }
    } catch (err) {
        res.render("index", {
            data: {
                username: req.body.username
            },
            errors: {
                common: {
                    msg: err.message,
                }
            }
        });
    }
}

module.exports = {
    getLogin,
    login
}