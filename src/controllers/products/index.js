const getAllProducts = require("./getAllProducts");
const getProductDetail = require("./getProductDetail");
const { formCreateProduct, postNewProduct } = require("./createProductForm");
const editProduct = require("./editProduct");
const { formDeleteProduct, deleteProduct } = require("./deleteProduct");

module.exports = {
  getAllProducts,
  getProductDetail,
  formCreateProduct,
  postNewProduct,
  editProduct,
  formDeleteProduct,
  deleteProduct
};
