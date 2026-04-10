const gachaService = require('./gacha-service');

async function playGacha(request, response, next) {
  try {
    // ambil userId
    const { userId } = request.body;

    const result = await gachaService.playGacha(userId);

    return response.status(200).json(result);
  } catch (error) {
    return next(error);
  }
}

async function getHistory(req, res, next) {
  try {
    const { userId } = req.params;

    if (userId !== req.user?.id) {
      return res.status(403).json({
        message: 'Forbidden',
      });
    }

    const history = await gachaService.getGachaHistory(userId);

    return res.json(history);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  playGacha,
  getHistory,
};
