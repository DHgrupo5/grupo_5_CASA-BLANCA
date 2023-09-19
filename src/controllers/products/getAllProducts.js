const products = require('../../database/products.json');
const path = require('path');

const getAllProducts = (req, res) => {
    res.render(path.join(__dirname, '../../views/home.ejs'), products);
};

module.exports = getAllProducts;