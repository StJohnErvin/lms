const mongoose = require('mongoose');

const LeaderboardSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  totalScore: { type: Number, required: true }
});

module.exports = mongoose.model('Leaderboard', LeaderboardSchema);
