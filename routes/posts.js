const router = require('express').Router();
const {
  validateEditPost,
  validateImageEditPost,
  validateNewPost,
} = require('../middleware/validators/validatePost');
const { parseMultiform } = require('../services/awsUpload');
const auth = require('../middleware/authenticate');
const {
  createPost,
  getAllPosts,
  editPost,
  addImages,
  deleteImages,
  deletePost,
} = require('../controllers/post');
const paginate = require('../middleware/paginate');

// @route  POST api/posts
// @desc   Create a new post
// @access Private
router.post('/', auth, parseMultiform, validateNewPost, createPost);

// @route  GET api/posts
// @desc   Get all posts with pagination
// @access Private
router.get('/', auth, paginate, getAllPosts);

// @route  Put api/posts/body/:id
// @desc   Edit title or description of post
// @access Private
router.put('/body/:id', auth, validateEditPost, editPost);

// @route  Put api/posts/images/:id
// @desc   Add image to post
// @access Private
router.put('/add/images/:id', auth, parseMultiform, addImages);

// @route  Put api/posts/images/:id
// @desc   Remove image from post
// @access Private
router.put('/remove/images/:id', auth, validateImageEditPost, deleteImages);

// @route  DELETE api/posts/:id
// @desc   Delete post by ID
// @access Private
router.delete('/:id', auth, deletePost);

module.exports = router;
