const express = require('express');

const router = express.Router();

const authController = require('../controllers/auth');

router.get('/users/get-users', authController.getAllData);

router.get('/users/logout', authController.logout);

router.post('/users/signin', authController.signin);

router.post('/users/signup', authController.signup);

module.exports = router;
