const express = require("express");
const router = express.Router();
const path = require('path');




const { getAllProducts, getProductDetail, formCreateProduct,postNewProduct } = require("../controllers/products");

router.get("/products", getAllProducts);
router.get("/productdetail/:id", getProductDetail);

router.get("/products/create", formCreateProduct);
router.post('/products', postNewProduct);


router.get("/shop", getAllProducts);


module.exports = router;
