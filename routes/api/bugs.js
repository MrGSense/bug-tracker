const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// User Model
const Bug = require('../../models/Bug');

// @route GET api/bugs
// @desc Get bugs
// @access Public
router.get('/', (req,res) => {
    Bug.find()
    .then(bugs => res.json(bugs))
});

// @route POST api/bugs
// @desc Create new bug
// @access Private
router.post('/', auth, (req, res) => {
    const newBug = new Bug({
        bug_title: req.body.title,
        bug_project: req.body.project,
        bug_description: req.body.description
    });
    newBug.save().then(bug => res.json(bug));
});

// @route DELETE api/bugs/:id
// @desc Delete bug
// @access Private
router.delete('/:id', auth, (req, res) => {
    Bug.findById(req.params.id)
    .then(bug => bug.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;