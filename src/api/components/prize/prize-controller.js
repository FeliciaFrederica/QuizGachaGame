const prizeService = require('./prize-service');

async function getAvailablePrizes(req, res, next) {
  try {
    const prizes = await prizeService.getAvailablePrizes();
    return res.json(prizes);
  } catch (error) {
    return next(error);
  }
}

async function createPrize(req, res, next) {
  try {
    const { name, quota } = req.body;

    const prize = await prizeService.createPrize(name, quota);
    return res.status(201).json(prize);
  } catch (error) {
    return next(error);
  }
}

async function getAllPrizes(req, res, next) {
  try {
    const prizes = await prizeService.getAllPrizes();
    return res.json(prizes);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getAvailablePrizes,
  createPrize,
  getAllPrizes,
};
