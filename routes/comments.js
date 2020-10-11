const router = require('express').Router();
const auth = require('../middleware/authenticate');
const { validateComment } = require('../middleware/validators/validateComment');
const { createComment } = require('../controllers/comment');

// @route  POST api/comments/:id
// @desc   Create a new comment on a post
// @access Private
router.post('/:id', auth, validateComment, createComment);

module.exports = router;

