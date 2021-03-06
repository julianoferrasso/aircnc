// index, show, store, update, destroy

// index = lista listagem de sessoes
// show = lista um aunica sessao
// store = cria sessao
// upadate = aletrar sessao
// destroy = destroi a sessao

// GET, POST, PUT, DELETE

// req.query = Acessar query paramas (para filtros "get do php")
// req.params = Acessar route params (para edicao, delete)
// req.body = Acessar corpo da requisisção (para criacao, edicao)


const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const email = req.body.email;
        // desestruturacao // const { email } = req.body; //

        let user = await User.findOne({ email: email});

        if (!user){
            user = await User.create({ email: email });
        }

        return res.json(user);
    }
};