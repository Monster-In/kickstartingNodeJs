const express = require('express');

const productsController = require('../controllers/product');
const router = express.Router(); 


router.get('/add-product', adminController.getAddProduct);
router.get('/products', adminController.getProducts);
router.post('/add-product',adminController.postAddProduct);


module.exports = router;