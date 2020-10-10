const { Post } = require('../db');
const { User } = require('../db');

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

    res.status(200).send('Posted');
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

    res.json(posts);
  } catch (err) {
    return res.status(400).json({ errors: [{ msg: err.message }] });
  }
};

const editPost = async (req, res) => {
  // is user the owner of the post
  // change title
  // edit description
};

const editImagesPost = async (req,res) => {
  // is user the owner of the post
  // remove or add image?
  // parse between two objects: image and remove
  // add what's in the image file and remove what's in the remove object
  
};

module.exports = {
  createPost,
  getAllPosts,
  editPost,
  editImagesPost
};
