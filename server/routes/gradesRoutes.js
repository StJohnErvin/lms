const express = require('express');
const { createGrade, listGrades } = require('../controllers/gradesController');
const router = express.Router();

router.post('/create', createGrade);
router.get('/list', listGrades);

module.exports = router;
