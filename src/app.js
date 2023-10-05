const express = require("express");
const path = require("path");
const morgan = require("morgan");

const userRoutes = require("./routes/userRoutes");
const productsRoutes = require("./routes/productRoutes");

const server = express();

server.use(express.static(path.join(__dirname, "../public")));

server.use(morgan("dev"));
server.set("view engine", "ejs");


server.use(express.urlencoded({extended: false})); //transporta los datos
server.use(express.json()); //convierte de obj a json

server.get("/", (req, res) => {
  res.render(path.join(__dirname, "./views/products/home.ejs"));
});

server.use(userRoutes);
server.use(productsRoutes);

module.exports = server;
