const fs = require('fs');
const path = require('path');
const productos = require('../../database/products.json');

const ruta = path.join(__dirname, '../../database/products.json');

const formDeleteProduct = (req, res) => {
  const ejsPath = path.join(__dirname, "../../views/products/deleteProduct.ejs");
  res.render(ejsPath, { productos: productos })

}

const deleteProduct = (req, res) => {
  const { id } = req.params;

  const aux = productos.filter((producto) => producto.id !== parseInt(id))
  const productosActualizados = JSON.stringify(aux)

  //sobreescribe el json original
  fs.writeFile(ruta, productosActualizados, (error) => {
    if (error) {
      res.send(`Error: ${error}`);
    }
    res.redirect('/productos-eliminar');
  });

}

module.exports = { deleteProduct, formDeleteProduct };