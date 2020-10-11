const router = require('express').Router();
const { validateNewUser } = require('./middleware/validators/validateNewUser');
const { loginValidator } = require('./middleware/validators/loginValidator');
const { validateNewPost } = require('./middleware/validators/validateNewPost');
const {
  validateEditPost,
  validateImageEditPost,
} = require('./middleware/validators/validateEditPost');
const { parseMultiform } = require('./services/awsUpload');
const auth = require('./middleware/authenticate');
const {
  createPost,
  getAllPosts,
  editPost,
  addImages,
  deleteImages,
  deletePost,
} = require('./controllers/post');

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
router.post('/posts', auth, parseMultiform, validateNewPost, createPost);

// @route  GET api/posts
// @desc   Get all posts
// @access Private
router.get('/posts', auth, getAllPosts);

// @route  Put api/posts/body/:id
// @desc   Edit title or description of post
// @access Private
router.put('/posts/body/:id', auth, validateEditPost, editPost);

// @route  Put api/posts/images/:id
// @desc   Add image to post
// @access Private
router.put('/posts/add/images/:id', auth, parseMultiform, addImages);

// @route  Put api/posts/images/:id
// @desc   Remove image from post
// @access Private
router.put(
  '/posts/remove/images/:id',
  auth,
  validateImageEditPost,
  deleteImages
);

// @route  DELETE api/posts/:id
// @desc   Delete post by ID
// @access Private
router.delete('/posts/:id', auth, deletePost);

module.exports = router;
