const { check, validationResult } = require('express-validator');

exports.validatePost = [
  check('title', 'Title is required').trim().notEmpty(),
  check('description', 'Description is required').trim().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    req.body.url = req.file.location;
    next();
  },
];
