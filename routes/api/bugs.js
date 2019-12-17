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
    let bug = await Bug.findOneAndUpdate(
      { user: req.user.id },
      { $set: bugFields },
      { new: true, upsert: true }
    );
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

// @route PUT api/bugs/:id/comment
// @desc Add a comment to a bug
// @access Private
router.put("/:id/comment", auth, async (req, res) => {
  try {
    const bug = Bug.findById(req.params.id);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
