const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../keys');

// Hash a password
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Compare a password with a hash
const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

// Generate a JWT token
const generateToken = (user) => {
  const payload = {
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  };
  
  return jwt.sign(payload, keys.jwtSecret, { expiresIn: '1h' });
};

// Validate email format
const validateEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.[^<>()[\]\\.,;:\s@"]{2,}))$/i;
  return re.test(String(email).toLowerCase());
};

// Format date to a readable string
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
  validateEmail,
  formatDate
};

