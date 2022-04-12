"use strict";
const { getInbox } = require("../controllers/inbox.controller");
const authGuard = require("../middlewares/common/auth.middleware");
const decorateHTML = require("../middlewares/common/decorateHTML.middleware");
const inboxRouter = require("express").Router();


inboxRouter.route("/")
    .get(
        decorateHTML("Inbox"),
        authGuard,
        getInbox
    );


module.exports = inboxRouter