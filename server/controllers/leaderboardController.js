const Grade = require('../models/Grade');

// Get leaderboard
exports.getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Grade.aggregate([
      {
        $group: {
          _id: '$studentId',
          totalScore: { $sum: '$score' }
        }
      },
      {
        $sort: { totalScore: -1 }
      }
    ]);

    res.json(leaderboard);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
