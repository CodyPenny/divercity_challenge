const router = require('express').Router();
const auth = require('../middleware/authenticate');
const { validateComment } = require('../middleware/validators/validateComment');
const { createComment, getComments } = require('../controllers/comment');
const paginate = require('../middleware/paginate');

// @route  POST api/comments/:id
// @desc   Create a new comment on a post
// @access Private
router.post('/:id', auth, validateComment, createComment);

// @route  GET api/comments/:id
// @desc   Get all comments
// @access Private
router.get('/:id', auth, paginate, getComments);

module.exports = router;

