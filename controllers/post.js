const { Post } = require('../db');
const { User } = require('../db');
const { s3delete } = require('../services/awsRemove');
const { stripDomain } = require('../utils/stripDomain');

const createPost = async (req, res) => {
  const { title, description } = req.body;
  const serialized = JSON.stringify(req.slugs);
  try {
    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
    });
    const newPost = await Post.create({
      title,
      description,
      image: serialized,
    });
    newPost.setUser(user);
    return res.status(200).send('Posted');
  } catch (err) {
    return res.status(400).json({ errors: [{ msg: 'Server Error' }] });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      limit: 10,
      order: [['createdAt', 'DESC']],
      attributes: ['id', 'title', 'description', 'image', 'createdAt'],
    });
    return res.json(posts);
  } catch (err) {
    return res.status(400).json({ errors: [{ msg: err.message }] });
  }
};

const editPost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    if (post.user_id !== req.user.id) {
      return res
        .status(404)
        .json({ errors: [{ msg: 'User not authorized to edit this post.' }] });
    }
    const { title, description } = req.body;
    if (title) {
      post.title = title;
    }
    if (description) {
      post.description = description;
    }
    await post.save();
    return res.json(post);
  } catch (err) {
    return res.status(400).json({ errors: [{ msg: err.message }] });
  }
};

const addImages = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    if (post.user_id !== req.user.id) {
      return res
        .status(404)
        .json({ errors: [{ msg: 'User not authorized to edit this post.' }] });
    }
    const sumImages = req.slugs.length + post.image.length;
    if (sumImages > 5) {
      await s3delete(req.slugs);
      return res.status(400).json({
        msg: 'Max 5 images reached. Remove older images then try again',
      });
    }
    const oldSlugs = stripDomain(post.image);
    req.slugs.forEach((newSlug) => oldSlugs.unshift(newSlug));
    post.image = JSON.stringify(oldSlugs);
    await post.save();
    res.status(200).json(post);
  } catch (err) {
    return res.status(400).json({ errors: [{ msg: err.message }] });
  }
};

const deleteImages = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    if (post.user_id !== req.user.id) {
      return res
        .status(404)
        .json({ errors: [{ msg: 'User not authorized to edit this post.' }] });
    }
    const { image } = req.body;
    const removeIndex = post.image.indexOf(image);
    const oldSlugs = stripDomain(post.image);
    oldSlugs.splice(removeIndex, 1);
    post.image = JSON.stringify(oldSlugs);
    await post.save();

    const slug = stripDomain([image]);
    await s3delete(slug);

    res.status(200).json(post);
  } catch (err) {
    return res.status(400).json({ errors: [{ msg: err.message }] });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: 'Post not found' });
    }
    if (post.user_id !== req.user.id) {
      return res
        .status(404)
        .json({
          errors: [{ msg: 'User not authorized to delete this post.' }],
        });
    }
    await post.destroy();
    return res.status(200).send('Post deleted');
  } catch (err) {
    return res.status(400).json({ errors: [{ msg: err.message }] });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  editPost,
  addImages,
  deleteImages,
  deletePost,
};
