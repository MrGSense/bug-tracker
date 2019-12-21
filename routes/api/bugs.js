const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// Mongoose models
const Bug = require("../../models/Bug");
const User = require("../../models/User");

// @route GET api/bugs
// @desc Get bugs
// @access Public
router.get("/", async (req, res) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route GET api/bugs/:id
// @desc Get bug info
// @access Public
router.get("/:id", async (req, res) => {
  try {
    const bug = await Bug.findById(req.params.id);

    if (!bug) return res.status(400).json({ msg: "Bug not found" });

    res.json(bug);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route POST api/bugs
// @desc Create or edit a bug
// @access Private
router.post("/", auth, async (req, res) => {
  const { title, description, project, githubRepo } = req.body;

  const bugFields = {};
  if (title) bugFields.title = title;
  if (description) bugFields.description = description;
  if (project) bugFields.project = project;
  if (githubRepo) bugFields.githubRepo = githubRepo;

  try {
    const user = await User.findById(req.user.id).select("-password");

    const newBug = new Bug({
      title: req.body.title,
      project: req.body.project,
      description: req.body.description
    });

    const bug = await newBug.save();

    res.json(bug);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route DELETE api/bugs/:id
// @desc Delete bug
// @access Private
router.delete("/:id", auth, async (req, res) => {
  try {
    await Bug.findOneAndRemove({ _id: req.params.id });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route POST api/bugs/:id/comment
// @desc Add a comment to a bug
// @access Private
router.post("/:id/comment", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    const bug = Bug.findById(req.params.id);

    const newComment = {
      text: req.body.text,
      name: user.name,
      user: req.user.id
    };

    bug.comments.unshift(newComment);

    await bug.save();

    req.json(bug.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route DELETE api/bugs/:id/comment/:comment_id
// @desc Delete a comment to a bug
// @access Private
router.delete("/:id/comment/:comment_id", auth, async (req, res) => {
  try {
    const bug = Bug.findById(req.params.id);

    // Pull out comment
    const comment = post.comments.find(
      comment => comment.id === req.params.comment_id
    );

    // Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: "Comment does not exist" });
    }

    // Check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    // Get remove index
    const removeIndex = post.comments
      .map(comment => comment.id)
      .indexOf(req.params.comment_id);

    this.post.comments.splice(removeIndex, 1);

    await bug.save();

    req.json(bug.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
