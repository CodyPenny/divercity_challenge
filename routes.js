const router = require('express').Router();
const { validateNewUser } = require('./middleware/validators/newUserValidator');

// @route  POST api/register
// @desc   registers users
// @access Public
router.post('/register', validateNewUser, require('./controllers/register'));

module.exports = router;