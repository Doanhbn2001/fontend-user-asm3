const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');
const is_Admin = require('../middleware/is_Admin');

router.get('/admin/logout');

router.post('/admin/signin', adminController.signIn);

router.get('/admin/get-products', is_Admin, adminController.getProducts);

router.delete('/admin/delete-product', is_Admin, adminController.deleteProduct);

module.exports = router;
