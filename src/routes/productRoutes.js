const express = require('express');
const router = express.Router();


const { getAllProducts } = require('../controllers/products/getAllProducts');
const { getProductDetail } = require('../controllers/products/getProductDetail');


router.get('/products', getAllProducts);
router.get('/productdetail:id', getProductDetail);

router.get('/shop', ())

module.exports = router;