const { Comment, User, Post } = require('../db');
const { Op } = require('sequelize');

const createComment = async (req, res) => {
  try {
    const { utterance } = req.body;
    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
    });
    const post = await Post.findOne({
      where: {
        id: req.params.id,
      },
    });

    const newComment = await Comment.create({
      utterance,
    });

    newComment.setUser(user);
    newComment.setPost(post);
    return res.status(200).json(newComment);
  } catch (err) {
    return res.status(400).json({
      errors: [{ msg: err.message }],
    });
  }
};

const getComments = async (req, res) => {
  try {
    const { offset, limit } = req.pagination;
    const { id } = req.params;
    const comments = await Comment.findAndCountAll({
      where: {
        post_id: id,
      },
      order: [['createdAt', 'ASC']],
      offset,
      limit,
    });
    return res.json(comments);
  } catch (err) {
    return res.status(400).json({ errors: [{ msg: err.message }] });
  }
};

module.exports = {
  createComment,
  getComments,
};
