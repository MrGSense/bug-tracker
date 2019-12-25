const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BugSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  author: {
    type: String
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
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "user"
      },
      author: {
        type: Schema.Types.String,
        ref: "user"
      },
      text: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  githubRepo: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Bug = mongoose.model("bug", BugSchema);
