const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const { checkAdmin } = require('../middleware/auth');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', checkAdmin, getUserProfile);

module.exports = router;
