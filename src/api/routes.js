const express = require('express');

const auth = require('./components/auth/auth-route');
const users = require('./components/users/users-route');
const gacha = require('./components/gacha/gacha-route');
const prize = require('./components/prize/prize-route');

module.exports = () => {
  const app = express.Router();
  console.log('loading auth');
  auth(app);
  console.log('loading auth');
  users(app);
  console.log('loading auth');
  gacha(app);
  console.log('loading auth');
  prize(app);

  return app;
};
