const express = require('express');
const { createResource, listResources } = require('../controllers/resourcesController');
const { checkAdmin } = require('../middleware/auth');
const router = express.Router();

router.post('/create', checkAdmin, createResource);
router.get('/list', listResources);

module.exports = router;
