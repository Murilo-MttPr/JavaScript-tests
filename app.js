// Pra ler entrada de dados no terminal
let prompt = require('prompt-sync')();
//

const express = require("express");
const app = express();
app.listen(8000);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html.html');
});

