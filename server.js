const express = require('express');
const { sequelize } = require('./db');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan('dev'));
app.use(express.json({ extended: false }));
app.use('/api/user', require('./routes/users'));
app.use('/api/posts', require('./routes/posts'));
app.use('/api/comments', require('./routes/comments'));

(async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, () =>
      console.log(
        `Express server connected on port:${PORT} and Postgres synced.`
      )
    );
  } catch (err) {
    console.error('Error connecting to Postgres: ', err);
    process.exit(1);
  }
})();
