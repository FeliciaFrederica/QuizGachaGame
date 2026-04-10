const express = require('express');

const users = require('./components/users/users-route');
const gacha = require('./components/gacha/gacha-route');
const prize = require('./components/prize/prize-route');

module.exports = () => {
  const app = express.Router();

  users(app);
  gacha(app);
  prize(app);

  return app;
};
