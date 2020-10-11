const { check, validationResult } = require('express-validator');

exports.validateEditPost = [
  check('title').trim(),
  check('description').trim(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

exports.validateImageEditPost = [
  check('image', 'Specify image string to be removed').trim().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

exports.validateNewPost = [
  check('title', 'Title is required').trim().notEmpty(),
  check('description', 'Description is required').trim().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

