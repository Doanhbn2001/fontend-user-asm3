const express = require('express');

const router = express.Router();

const productController = require('../controllers/product');

const isAuth = require('../middleware/is_Auth');

router.get('/products/get-all-products', productController.getAllProducts);

router.get('/products/pagination', productController.getProducts);

router.get('/products/:productId', productController.getDetailProduct);

router.post('/carts/addCart', isAuth, productController.postCart);

router.put('/carts/update', isAuth, productController.updateCart);

router.delete('/carts/delete', isAuth, productController.deleteCart);

router.get('/carts', isAuth, productController.getCarts);

router.get('/email', isAuth, productController.postEmail);

router.get('/histories', isAuth, productController.getOrders);

router.get('/histories/:id', isAuth, productController.getDetailOrder);

module.exports = router;
