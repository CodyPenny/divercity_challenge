module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    photo: DataTypes.STRING
  });

  Post.associate = models => {
    Post.belongsTo(models.User, {
      foreignKey: 'user_id'
    });
  };

  return Post;
};