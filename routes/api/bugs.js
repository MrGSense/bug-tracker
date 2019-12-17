const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// Mongoose models
const Bug = require("../../models/Bug");
const User = require("../../models/User");

// @route GET api/bugs
// @desc Get bugs
// @access Public
router.get("/", (req, res) => {
  Bug.find().then(bugs => res.json(bugs));
});

// @route POST api/bugs
// @desc Create new bug
// @access Private
router.post("/", auth, (req, res) => {
  const newBug = new Bug({
    title: req.body.title,
    project: req.body.project,
    description: req.body.description
  });

  newBug.save().then(bug => res.json(bug));
});

// @route DELETE api/bugs/:id
// @desc Delete bug
// @access Private
router.delete("/:id", auth, (req, res) => {
  Bug.findById(req.params.id)
    .then(bug => bug.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

// @route PUT api/bugs/:id
// @desc Edit bug
// @access Private
router.put("/:id", auth, (req, res) => {
  Bug.findById(req.params.id);
});

// @route PUT api/bugs/:id/comment
// @desc Add a comment to a bug
// @access Private
router.put("/:id/comment", auth, (req, res) => {
  Bug.findById(req.params.id);
});

module.exports = router;
