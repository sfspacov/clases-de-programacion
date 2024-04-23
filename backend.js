const express = require('express');
const app = express();

app.get('/', (req, res) => { res.json("Hola"); });

const puerta = 2222;
app.listen(puerta, () => { console.log('Server running on http://localhost:' + puerta); });
/*
    EJECUTAR LOS DOS COMANDOS ABAJO EN EL TERMINAL
    npm install express
    node backend.js
*/