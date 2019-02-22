const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getShop);

router.get('/shop/product-list', productsController.getProducts);

module.exports = router;
