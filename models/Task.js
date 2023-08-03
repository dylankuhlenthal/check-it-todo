const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    text: {
      required: true,
      type: String,
    },
    completed: {
      required: false,
      type: Boolean,
      default: false,
    },
    authorId: {
      required: true,
      type: String,
    },
    dueDate: {
      required: false,
      type: Date,
      default: new Date(),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", TaskSchema);
