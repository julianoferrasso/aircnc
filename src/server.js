const express = require('express');
const mongoose = require('mongoose');
const routes = require ('./routes');

const app = express();

mongoose.connect('mongodb+srv://juliano:juliano@nomadwe-kxpnw.mongodb.net/nomadwe?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// GET, POST, PUT, DELETE

// req.query = Acessar query paramas (para filtros "get do php")
// req.params = Acessar route params (para edicao, delete)
// req.body = Acessar corpo da requisisção (para criacao, edicao)

app.use(express.json());
app.use(routes);

app.listen(3333);