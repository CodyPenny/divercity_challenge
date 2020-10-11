const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('post', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: {
      type: DataTypes.STRING,
      get() {
        return JSON.parse(this.getDataValue('image')).map(
          (slug) =>
            `https://divercity-bucket.s3.us-east-2.amazonaws.com/files_from_node/${slug}`
        );
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue('createdAt')).fromNow();
      },
    },
  });

  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      foreignKey: 'user_id',
    });
    Post.hasMany(models.Comment, {
      foreignKey: 'post_id',
    });
  };

  return Post;
};
