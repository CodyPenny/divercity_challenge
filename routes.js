const router = require('express').Router();
const { validateNewUser } = require('./middleware/validators/newUserValidator');
const { loginValidator } = require('./middleware/validators/loginValidator');

// @route  POST api/register
// @desc   registers new users
// @access Public
router.post('/register', validateNewUser, require('./controllers/register'));

// @route  POST api/login
// @desc   login returning users
// @access Public
router.post('/login', loginValidator, require('./controllers/login'));

module.exports = router;