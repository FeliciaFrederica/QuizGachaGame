const express = require('express');
const userAuth = require('../../middlewares/user-middleware');
const prizeController = require('./prize-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/prize', route);
  // endpoint menampilkan daftar prize yang tersedia saja
  route.get('/', userAuth, prizeController.getAvailablePrizes);

  // endpoint untuk menampilkan semua daftar prize beserta quotanya
  route.get('/all', userAuth, prizeController.getAllPrizes);
};
