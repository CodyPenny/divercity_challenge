const { Sequelize } = require('sequelize');
const { development } = require('./config');

const sequelize = new Sequelize(
  development.database,
  development.username,
  development.password,
  {
    host: 'localhost',
    dialect: 'postgres',
  }
);

const models = {
  User: require('../models/User'),
  Post: require('../models/Post'),
  Comment: require('../models/Comment'),
};

// pass in instance and datatype
for (const modelName in models) {
  models[modelName] = models[modelName](sequelize, Sequelize);
}

// Doing both loops at once will throw error. Relations have not been fully defined
for (const modelName in models) {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
}

const { User, Post, Comment } = models;

module.exports = {
  User,
  Post,
  Comment,
  sequelize,
};
