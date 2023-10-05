
const products = require('../../database/products.json');
const fs = require('fs');
const path = require('path');

function postNewProduct(req, res) {
  const { title, price, description } = req.body;
  const ultimoId = products[products.length - 1].id + 1; //tomo el ultimo id y lo incremento
  
  const newProduct = { // creo el nuevo producto
    id: ultimoId,
    title,
    price,
    description,
    image: req.file ? req.file.filename : ''
  };

  products.push(newProduct);

  const ruta = path.join(__dirname, '../../database/products.json')
  const data = JSON.stringify(products) // convierto el obj a json 
  fs.writeFile(ruta,data, (error)=>{
    if(error) {
      res.send(error)
    }else{
      res.redirect('/products')
    }
  })


}

module.exports = postNewProduct;
