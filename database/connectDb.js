const mongoose = require("mongoose");
const { config } = require("../config");
const connectDb = async () => {
  try {
    const connection = await mongoose.connect(config.connectionString);
    console.log(
      "MongoDB connected:",
      connection.connection.host,
      connection.connection.name
    );
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = connectDb;
