const express = require("express");
const router = express.Router();

const { getAllProducts, getProductDetail } = require("../controllers/products");

router.get("/products", getAllProducts);
router.get("/productdetail/:id", getProductDetail);

router.get("/shop", getAllProducts);

module.exports = router;
