const prizeRepository = require('./prize-repository');

async function getAvailablePrizes() {
  return prizeRepository.getAvailablePrizes();
}

async function createPrize(name, quota) {
  if (!name) {
    throw new Error('Prize name is required');
  }

  if (typeof quota !== 'number' || quota < 0) {
    throw new Error('Invalid quota');
  }

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
