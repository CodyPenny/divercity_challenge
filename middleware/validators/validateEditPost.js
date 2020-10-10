const { body, validationResult } = require('express-validator');

exports.validateEditPost = [
  body('title').trim(),
  body('description').trim(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
