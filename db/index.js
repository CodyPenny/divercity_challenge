const { Sequelize } = require('sequelize');
const { development } = require('./config');

const sequelize = new Sequelize( development.database, development.username, development.password, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Postgres connected');
  } catch (err) {
    console.error('Error connecting to Postgres: ', err);
    process.exit(1);
  }
};

module.exports = connectDB;