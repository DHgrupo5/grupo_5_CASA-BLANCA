const getAllProducts = require("./getAllProducts");
const getProductDetail = require("./getProductDetail");
const { formCreateProduct, postNewProduct } = require("./createProductForm");
const {formEditProduct, editProduct} = require("./editProduct");
const { formDeleteProduct, deleteProduct } = require("./deleteProduct");

module.exports = {
  getAllProducts,
  getProductDetail,
  formCreateProduct,
  postNewProduct,
  formEditProduct,
  editProduct,
  formDeleteProduct,
  deleteProduct
};
