const express = require('express');
const { createTest, listTests } = require('../controllers/testController');
const { checkAdmin } = require('../middleware/auth');
const router = express.Router();

router.post('/create', checkAdmin, createTest);
router.get('/list', listTests);

module.exports = router;
