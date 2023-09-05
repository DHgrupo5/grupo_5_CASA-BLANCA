const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

const path = require('path');

app.use(express.static('public'));

app.get('/404', (req, res) => {
    res.send("Error página no encontrada");
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});
});

app.get('/404', (req, res) => {
    res.send("Error página no encontrada");
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});
});

app.get('/404', (req, res) => {
    res.send("Error página no encontrada");
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/products.html'));
});
});

app.get('/404', (req, res) => {
    res.send("Error página no encontrada");
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});
});

app.get('/404', (req, res) => {
    res.send("Error página no encontrada");
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/shop.html'));
});
});

app.listen(PORT, ()=>console.log(`Servidor escuchando en puerto ${PORT}`));