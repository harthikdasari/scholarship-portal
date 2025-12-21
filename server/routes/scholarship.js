const express = require('express');
const router = express.Router();
const { applyForScholarship, getStudentApplications } = require('../controllers/scholarshipController');

router.post('/apply', applyForScholarship);
router.get('/student/:studentId', getStudentApplications);

module.exports = router;
