const gachaRepository = require('./gacha-repository');
const prizeRepository = require('../prize/prize-repository');

async function playGacha(userId) {
  // cek limit harian
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  const gachaCount = await gachaRepository.countGachaToday(
    userId,
    startOfDay,
    endOfDay
  );

  if (gachaCount >= 5) {
    return {
      status: 'ERROR',
      message: 'Daily gacha limit reached',
    };
  }

  const rarityTable = [
    { name: 'Emas 10 gram', chance: 0.01 },
    { name: 'Smartphone X', chance: 0.04 },
    { name: 'Smartwatch Y', chance: 0.1 },
    { name: 'Voucher Rp100.000', chance: 0.2 },
    { name: 'Pulsa Rp50.000', chance: 0.65 },
  ];

  function getRandomPrizeByChance(table) {
    const rand = Math.random();
    let cumulative = 0;

    const selected = table.find((item) => {
      cumulative += item.chance;
      return rand < cumulative;
    });

    return selected ? selected.name : null;
  }

  const winChance = 0.2;
  const isWin = Math.random() < winChance;

  let status = 'LOSE';
  let prizeName = null;

  if (isWin) {
    const prizes = await prizeRepository.getAvailablePrizes();

    const availableNames = prizes.map((p) => p.name);
    const filteredRarity = rarityTable.filter((r) =>
      availableNames.includes(r.name)
    );

    const selectedName = getRandomPrizeByChance(filteredRarity);
    const selected = prizes.find((p) => p.name === selectedName);

    if (selected && selected.remainingQuota > 0) {
      status = 'WIN';
      prizeName = selected.name;

      await prizeRepository.decreaseQuota(selected.id);
    }
  }

  // simpan log via repository
  await gachaRepository.createGacha({
    userId,
    prizeName,
    status,
  });

  return {
    status,
    prize: prizeName,
  };
}

async function getGachaHistory(userId) {
  return gachaRepository.getGachaHistoryByUser(userId);
}

module.exports = {
  playGacha,
  getGachaHistory,
};
