const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    username: String,
    email: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    boards:{
      type: [String],
      default: [],
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
