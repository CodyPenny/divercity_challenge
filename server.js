const express = require('express');
const { sequelize } = require('./db');
const morgan = require('morgan');
const router = require('./routes');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan('dev'));
app.use(express.json({ extended: false }));
app.use('/api', router);

// test get route
// app.get('/', (req,res) => {
//   res.send('API running');
// })

(async () => {
  try {
    await sequelize.sync({force: true});
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
