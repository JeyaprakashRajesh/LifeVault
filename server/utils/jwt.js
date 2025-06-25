const jwt = require('jsonwebtoken');

const generateToken = (userId, phone) => {
  return jwt.sign(
    { id: userId, phone },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};

module.exports = { generateToken };
