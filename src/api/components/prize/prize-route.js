const express = require('express');
const adminOnly = require('../../../middlewares/admin-middleware');
const prizeController = require('./prize-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/prize', route);
  // endpoint menampilkan daftar prize yang tersedia saja
  route.get('/', prizeController.getAvailablePrizes);

  // endpoint untuk menambahkan hadiah (admin)
  route.post('/', adminOnly, prizeController.createPrize);

  // endpoint untuk menampilkan semua daftar prize beserta quotanya
  route.get('/all', prizeController.getAllPrizes);
};
