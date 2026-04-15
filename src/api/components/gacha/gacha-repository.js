const { Gacha } = require('../../../models');

async function createGacha(data) {
  return Gacha.create(data);
}

async function countGachaToday(userId, startOfDay, endOfDay) {
  return Gacha.countDocuments({
    userId,
    createdAt: {
      $gte: startOfDay,
      $lte: endOfDay,
    },
  });
}

async function getGachaHistoryByUser(userId, limit = 20, skip = 0) {
  return Gacha.find({ userId })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean();
}

module.exports = {
  createGacha,
  countGachaToday,
  getGachaHistoryByUser,
};
