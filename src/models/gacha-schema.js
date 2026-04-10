module.exports = (db) =>
  db.model(
    'Gacha',
    db.Schema({
      userId: String,

      prizeName: {
        type: String,
        default: null,
      },

      status: {
        type: String,
        enum: ['WIN', 'LOSE'],
        required: true,
      },

      createdAt: {
        type: Date,
        default: Date.now,
      },
    })
  );
