module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('posts', 'image', {
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('posts', 'description', {
        type: Sequelize.TEXT,
      }),
      queryInterface.changeColumn('posts', 'id', {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('posts', 'image'),
      queryInterface.changeColumn('posts', 'description'),
      queryInterface.changeColumn('posts', 'id'),
    ]);
  },
};
