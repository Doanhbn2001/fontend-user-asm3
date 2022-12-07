const express = require('express');

const router = express.Router();

const productController = require('../controllers/product');

router.get('/products/get-all-products', productController.getAllProducts);

router.get('/products/pagination', productController.getProducts);

router.get('/products/:productId', productController.getDetailProduct);

router.get('/carts', productController.getCarts);

module.exports = router;
