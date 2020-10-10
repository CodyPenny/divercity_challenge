const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'Denied. No token authorization.' });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.jwtToken);
    req.user = decodedToken.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
