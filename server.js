const express = require('express');
const connectDB = require('./db');

const app = express();
const PORT = process.env.PORT || 8080;

connectDB();

app.listen(PORT, () => console.log(`Express server connected on port:${PORT}`));