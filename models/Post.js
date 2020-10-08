'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {});

  Post.associate = function(models) {
    // associations can be defined here
  };
  
  return Post;
};