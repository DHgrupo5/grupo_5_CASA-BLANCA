const products = require("../../database/products.json");

const getProductDetail = (req, res) => {
  const { id } = req.params.id;
  const product = products.find((elem) => elem.id == id);
  if (!product) {
    return res.send("Product not found");
  }
  res.send(product);
};

module.exports = getProductDetail;
