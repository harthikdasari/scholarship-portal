const express = require('express');
const router = express.Router();
const { register, login, getInstitutions } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.get('/institutions', getInstitutions);

module.exports = router;
