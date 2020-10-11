module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('comment', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    utterance: DataTypes.STRING,
  });

  Comment.associate = (models) => {
    Comment.belongsTo(models.Post, {
      foreignKey: 'post_id',
    });
    Comment.belongsTo(models.User, {
      foreignKey: 'user_id',
    });
  };

  return Comment;
};
