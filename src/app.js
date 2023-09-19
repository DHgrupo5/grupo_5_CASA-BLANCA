const express = require('express');
const path = require('path');
const morgan = require('morgan');

const server = express();

server.use(express.static(path.join(__dirname, "public")));

server.set('view engine', 'ejs');



module.exports = server;

