const express = require('express');
const app = express();

process.env.PORT || 3001;

const path = require('path');

app(express.static(public));

app.get('/404', (req, res) => {
    res.send("Error página no encontrada");
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});
});
app.listen(PORT, ()=>console.log(`Servidor escuchando en puerto ${PORT}`));