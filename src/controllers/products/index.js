const getAllProducts = require("./getAllProducts");
const getProductDetail = require("./getProductDetail");
const { formCreateProduct, postNewProduct } = require("./createProductForm");
const editProduct = require("./editProduct");

module.exports = {
  getAllProducts,
  getProductDetail,
  formCreateProduct,
  postNewProduct,
  editProduct
};
