const mongoose = require("mongoose");

const dbUrl = process.env.DB_URL || "mongodb://mongodb:27017/vidly";

const connect = async () => {
  await mongoose.connect(dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Connected to MongoDB: " + dbUrl);
};

const close = () => mongoose.connection.close();

module.exports = { connect, close, url: dbUrl };
