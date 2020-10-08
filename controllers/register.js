const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // does user exist?
  } catch (err) {
    
  }
    res.send('posted')
  
};

module.exports = registerUser;