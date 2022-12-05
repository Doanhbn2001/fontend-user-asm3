const express = require('express');

const router = express.Router();

const authController = require('../controllers/auth');

router.get('/users', authController.signin);

router.post('/users/signup', authController.signup);

module.exports = router;
