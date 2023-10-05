const path = require("path");

const formCreateProduct = (req, res) =>{
  const ruta = path.join(__dirname,"../../views/products/createProduct")
  res.render(ruta)

}

module.exports = formCreateProduct;