const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    color:{
      type: String,
      trim: true,
      default:""
    },
    boardId:{
      type: String,
      trim: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("List", listSchema);