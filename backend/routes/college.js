const express = require('express');
const router = express.Router();
const { authenticateCollege, mintBadge } = require('../controllers/collegeController');

router.post('/connect', authenticateCollege);
router.post('/mint-badge', mintBadge);

module.exports = router;