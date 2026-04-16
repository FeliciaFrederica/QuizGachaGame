const prizeService = require('./prize-service');

async function getAvailablePrizes(req, res, next) {
  try {
    const prizes = await prizeService.getAvailablePrizes();
    return res.json(prizes);
  } catch (error) {
    return next(error);
  }
}

async function getAllPrizes(req, res, next) {
  try {
    const prizes = await prizeService.getAllPrizes();
    return res.status(200).json({
      data: prizes,
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getAvailablePrizes,
  getAllPrizes,
};
