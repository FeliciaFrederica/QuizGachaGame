const mongoose = require('mongoose');

module.exports = (db) =>
  db.model(
    'Gacha',
    db.Schema(
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },

        prizeName: {
          type: String,
          default: null,
        },

        status: {
          type: String,
          enum: ['WIN', 'LOSE'],
          required: true,
        },
      },
      { timestamps: true }
    )
  );
