const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BugSchema = new Schema({
  bug_title: {
    type: String,
    required: true
  },
  bug_project: {
    type: String,
    required: true
  },
  bug_description: {
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
