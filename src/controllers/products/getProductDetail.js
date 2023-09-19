const products = require('../../database/products.json');
const path = require('path');

const express = require('express');
const app = express();


app.get('/productdetail/:id', (req, res) => {
    const id = req.params.id;
    const getProductDetail = products.find((elem) => elem.id == id)
    res.render(getProductDetail);
});

module.exports = getProductDetail;