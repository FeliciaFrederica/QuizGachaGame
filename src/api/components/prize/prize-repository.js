const { Prize } = require('../../../models');

async function getAvailablePrizes() {
  return Prize.find({ remainingQuota: { $gt: 0 } }).select(
    'name remainingQuota -_id'
  );
}

async function getAllPrizes() {
  return Prize.find().select('name remainingQuota -_id');
}

async function decreaseQuota(id) {
  return Prize.updateOne(
    { _id: id, remainingQuota: { $gt: 0 } },
    { $inc: { remainingQuota: -1 } }
  );
}

module.exports = {
  getAvailablePrizes,
  getAllPrizes,
  decreaseQuota,
};
