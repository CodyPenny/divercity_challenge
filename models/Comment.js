const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('comment', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    utterance: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      get() {
        return moment(this.getDataValue('createdAt')).fromNow();
      },
    },
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
