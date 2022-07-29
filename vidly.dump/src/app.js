const express = require("express");

const app = express();

require("./middlewares/index")(app);
require("./utils/mongo")();
require("./controllers/index")(app);

module.exports = app;
