const { body, validationResult } = require('express-validator');

exports.validateNewUser = [
  body('name', 'Name is required').trim().notEmpty(),
  body('email', 'Please enter a valid email').trim().isEmail(),
  body(
    'password',
    'Please enter a password with 6 or more characters'
  ).trim().isLength({ min: 6 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    };
    next();
  }
];