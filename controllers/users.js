"use strict";
const User = require("../models/People");
const bcrypt = require("bcrypt");


const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        console.log(users);
        return res.render("users", { users: users });
    } catch (err) {
        next(err);
    }
}


async function addUser(req, res, next) {
    let newUser;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    if (req.files && req.files.length > 0) {
        newUser = new User({
            ...req.body,
            avatar: req.files[0].filename,
            password: hashedPassword,
        });
    } else {
        newUser = new User({
            ...req.body,
            password: hashedPassword,
        });
    }

    // save user or send error
    try {
        const result = await newUser.save();
        res.status(200).json({
            message: "User was added successfully!",
        });
    } catch (err) {
        res.status(500).json({
            errors: {
                common: {
                    msg: "Unknown error occurred!",
                },
            },
        });
    }
}




module.exports = {
    getUsers,
    addUser
}