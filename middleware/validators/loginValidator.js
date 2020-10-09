const { body, validationResult } = require('express-validator');

exports.loginValidator = [
  body('email', 'Please enter a valid email').trim().notEmpty(),
  body('password', 'Password is required').trim().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    };
    next();
  }
];