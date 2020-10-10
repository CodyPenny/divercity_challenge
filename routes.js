const router = require('express').Router();
const { validateNewUser } = require('./middleware/validators/newUserValidator');
const { loginValidator } = require('./middleware/validators/loginValidator');
const { validatePost } = require('./middleware/validators/validatePost');
const { parseMultiform } = require('./services/awsUpload');
const auth = require('./middleware/authenticate');

// @route  POST api/register
// @desc   register new users
// @access Public
router.post('/register', validateNewUser, require('./controllers/register'));

// @route  POST api/login
// @desc   log-in returning users
// @access Public
router.post('/login', loginValidator, require('./controllers/login'));

// @route  POST api/posts
// @desc   Create a new post
// @access Private
router.post(
  '/posts',
  auth,
  parseMultiform,
  validatePost,
  require('./controllers/post')
);

module.exports = router;
