const prizeRepository = require('./prize-repository');

async function getAvailablePrizes() {
  return prizeRepository.getAvailablePrizes();
}

async function createPrize(name, quota) {
  return prizeRepository.createPrize({
    name,
    quota,
    remainingQuota: quota,
  });
}

async function getAllPrizes() {
  return prizeRepository.getAllPrizes();
}

async function decreaseQuota(id) {
  return prizeRepository.decreaseQuota(id);
}

module.exports = {
  getAvailablePrizes,
  createPrize,
  getAllPrizes,
  decreaseQuota,
};
