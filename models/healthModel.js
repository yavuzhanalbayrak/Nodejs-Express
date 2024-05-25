const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
    },
    middlename: {
      type: String,
      default:"HAN",
    },
    lastname: {
      type: String,
    },
    salary: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);