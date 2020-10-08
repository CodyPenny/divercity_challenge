const express = require('express');
const connectDB = require('./db');
const morgan = require('morgan');
const router = require('./routes');
const app = express();
const PORT = process.env.PORT || 8080;

connectDB();

app.use(morgan('dev'));
app.use(express.json({extended:false}));
app.use('/api', router);

// test get route
// app.get('/', (req,res) => {
//   res.send('API running');
// })

app.listen(PORT, () => console.log(`Express server connected on port:${PORT}`));