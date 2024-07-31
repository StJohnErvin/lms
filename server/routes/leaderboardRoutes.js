const express = require('express');
const { createLeaderboardEntry, listLeaderboard } = require('../controllers/leaderboardController');
const router = express.Router();

router.post('/create', createLeaderboardEntry);
router.get('/list', listLeaderboard);

module.exports = router;
