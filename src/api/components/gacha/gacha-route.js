const express = require('express');

const gachaController = require('./gacha-controller');
const userAuth = require('../../../middlewares/user-middleware');

const route = express.Router();

module.exports = (app) => {
  app.use('/gacha', route);

  // endpoint untuk melakukan gacha
  route.post('/', gachaController.playGacha);

  // endpoint untuk melihat history gacha user
  route.get('/history/:userId', userAuth, gachaController.getHistory);
};
