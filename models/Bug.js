const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BugSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  title: {
    type: String,
    required: true
  },
  project: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  solved: false,
  comments: [],
  githubRepo: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Bug = mongoose.model("bug", BugSchema);
