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

    if (!name) {
      return res.status(400).json({
        message: 'Prize name is required',
      });
    }

    if (typeof quota !== 'number' || quota < 0) {
      return res.status(400).json({
        message: 'Quota must be a positive number',
      });
    }

    const prize = await prizeService.createPrize(name, quota);
    return res.status(201).json(prize);
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
  createPrize,
  getAllPrizes,
};
