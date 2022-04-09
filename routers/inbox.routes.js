"use strict";
const { getInbox } = require("../controllers/inbox");
const decorateHTML = require("../middlewares/common/decorateHTML");
const inboxRouter = require("express").Router();


inboxRouter.get("/", decorateHTML("Inbox"), getInbox)


module.exports = inboxRouter