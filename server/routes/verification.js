const express = require('express');
const router = express.Router();
const { getPendingApplications, verifyApplication } = require('../controllers/verificationController');

router.get('/institution/:institutionId', getPendingApplications);
router.put('/verify/:id', verifyApplication);

module.exports = router;
