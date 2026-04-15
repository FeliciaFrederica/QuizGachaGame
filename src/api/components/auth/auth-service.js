const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const authRepository = require('./auth-repository');
const { passwordMatched } = require('../../../utils/password');

function generateToken(user) {
  const secretKey = process.env.JWT_SECRET;
  const payload = {
    email: user.email,
    role: user.role,
    timestamp: Date.now(),
  };
  return jwt.sign(payload, secretKey, {
    expiresIn: '1d',
  });
}

async function register(email, password, fullName) {
  // 1. cek user sudah ada
  const existingUser = await authRepository.getUserByEmail(email);
  if (existingUser) return null;

  // 2. hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // 3. simpan user
  const user = await authRepository.createUser({
    email,
    password: hashedPassword,
    fullName,
    role: 'user',
  });

  return {
    email: user.email,
    fullName: user.fullName,
  };
}

async function checkLogin(email, password) {
  const user = await authRepository.getUserByEmail(email);
  const userPass = user ? user.password : '<RANDOM>';
  const loginPassed = await passwordMatched(password, userPass);

  if (user && loginPassed) {
    return {
      email: user.email,
      token: generateToken(user),
    };
  }

  return null;
}

module.exports = {
  checkLogin,
  register,
};
