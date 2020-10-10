const { Post } = require('../db');
const { User } = require('../db');

const createPost = async (req, res) => {
  const { title, description, url } = req.body;

  try {
    const user = await User.findOne({
      where: {
        id: req.user.id,
      },
    });

    const newPost = await Post.create({
      title,
      description,
      image: url,
    });

    newPost.setUser(user);

    res.status(200).json(newPost);
  } catch (err) {
    return res.status(400).json({ errors: [{ msg: 'Server Error' }] });
  }
};

module.exports = createPost;
