const prizeRepository = require('./prize-repository');

async function getAvailablePrizes() {
  return prizeRepository.getAvailablePrizes();
}

async function getAllPrizes() {
  return prizeRepository.getAllPrizes();
}

async function decreaseQuota(id) {
  return prizeRepository.decreaseQuota(id);
}

module.exports = {
  getAvailablePrizes,
  getAllPrizes,
  decreaseQuota,
};
