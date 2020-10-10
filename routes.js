const router = require('express').Router();
const { validateNewUser } = require('./middleware/validators/newUserValidator');
const { loginValidator } = require('./middleware/validators/loginValidator');
const { validatePost } = require('./middleware/validators/validatePost');
const { parseMultiform } = require('./services/awsUpload');
const auth = require('./middleware/authenticate');
const { createPost, getAllPosts, editPost, editImagesPost } = require('./controllers/post');


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
router.post('/posts', auth, parseMultiform, validatePost, createPost);

// @route  GET api/posts
// @desc   Get all posts
// @access Private
router.get('/posts', auth, getAllPosts);

// @route  Put api/posts/body/:id
// @desc   Edit title or description of post
// @access Private
router.put('/posts/bpdy/:id', auth, editPost);

// @route  Put api/posts/images/:id
// @desc   Edit title or description of post
// @access Private
router.put('/posts/images/:id', auth, editImagesPost);

// @route  DELETE api/posts/:id
// @desc   Delete post by ID
// @access Private

module.exports = router;
