const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      trim: true,
    },
    done:{
      type: Boolean,
      default:false
    },
    listId:{
      type: String,
      trim: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);