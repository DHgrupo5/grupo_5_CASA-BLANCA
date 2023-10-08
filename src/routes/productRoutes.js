const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { getAllProducts, getProductDetail, formCreateProduct, postNewProduct, editProduct, deleteProduct, formDeleteProduct } = require("../controllers/products");


const storage = multer.diskStorage({
  destination: (req, file, funcion) => {
    funcion(null, path.join(__dirname, '../../public/images/'))
  },
  filename: (req, file, funcion) => {
    funcion(null,  `${Date.now()}_product${path.extname(file.originalname)}`)
  }
});
const uploadImgProduct = multer({ storage: storage })

router.get("/products", getAllProducts);
router.get("/products/create", formCreateProduct);
router.get("/products/:id", getProductDetail);
router.post('/products', uploadImgProduct.single('image'), postNewProduct);
//router.get("/products/:id/edit", editProduct);
router.get("/productos-eliminar", formDeleteProduct);
router.delete("/productos-eliminar/:id", deleteProduct);


module.exports = router;
