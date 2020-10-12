const { query, validationResult } = require('express-validator');

module.exports = [
  query('page', 'Page missing').trim().notEmpty(),
  query('limit', 'Limit missing').trim().notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const page = +req.query.page;
    const limit = +req.query.limit;

    req.pagination = {
      offset: (page - 1) * limit,
      limit,
    };
    next();
  },
];
