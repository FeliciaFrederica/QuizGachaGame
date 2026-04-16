const logger = require('../core/logger')('seed');

async function seedPrizes(Prize) {
  try {
    if (!Prize) {
      throw new Error('Prize model is undefined');
    }

    const count = await Prize.countDocuments();

    if (count === 0) {
      await Prize.insertMany([
        { name: 'Emas 10 gram', quota: 1, remainingQuota: 1 },
        { name: 'Smartphone X', quota: 5, remainingQuota: 5 },
        { name: 'Smartwatch Y', quota: 10, remainingQuota: 10 },
        { name: 'Voucher Rp100.000', quota: 100, remainingQuota: 100 },
        { name: 'Pulsa Rp50.000', quota: 500, remainingQuota: 500 },
      ]);

      logger.info('Prizes seeded');
    } else {
      logger.info('Prizes already exist');
    }
  } catch (err) {
    logger.error('Seeder error:', err);
  }
}

module.exports = seedPrizes;
