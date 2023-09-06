const express = require("express");
const app = express();

const path = require("path");
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "public")));

app.get("/404", (req, res) => {
  res.send("Error página no encontrada");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get("/shop", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/shop.html"));
});

app.listen(PORT, () => console.log(`Servidor escuchando en puerto 3001`));
