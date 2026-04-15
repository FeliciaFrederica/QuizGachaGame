const gachaService = require('./gacha-service');

async function playGacha(request, response, next) {
  try {
    // ambil userId
    const { userId } = request.user.id;

    const result = await gachaService.playGacha(userId);

    return response.status(200).json(result);
  } catch (error) {
    return next(error);
  }
}

async function getHistory(req, res, next) {
  try {
    const { userId } = req.user.id;

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
