const productos = require('../../database/products.json')
const path = require('path')
const fs = require('fs')

const formEditProduct = function (req, res) {
  const id = req.params.id;
  const ruta = path.join(__dirname, "../../views/products/editProduct.ejs");
  res.render(ruta, {id,productos})

}
const editProduct =(req, res) =>{
  const { id } = req.params;

  const { title, price, description } = req.body;

  productos.forEach((prod) => {
    if (prod.id == id) {
      prod.id = id;
      prod.title = title;
      prod.price = price;
      prod.description = description;
    }
  })

  const productPath = path.join(__dirname,'../../database/products.json');

    const data = JSON.stringify(productos);

    fs.writeFile(productPath,data, (error) => {
        if(error){
            res.send(`Error: ${error}`);
        }else{
            res.redirect(`/products/${id}`);
        }
    });
}



  
  




module.exports = { formEditProduct, editProduct };