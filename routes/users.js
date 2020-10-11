const router = require('express').Router();
const {
  validateNewUser,
  validateReturningUser,
} = require('../middleware/validators/validateUser');

// @route  POST api/register
// @desc   register new users
// @access Public
router.post('/register', validateNewUser, require('../controllers/register'));

// @route  POST api/login
// @desc   log-in returning users
// @access Public
router.post('/login', validateReturningUser, require('../controllers/login'));

module.exports = router;
