// index, show, store, update, destroy

// index = lista listagem de sessoes
// show = lista um aunica sessao
// store = cria sessao
// upadate = aletrar sessao
// destroy = destroi a sessao

const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const email = req.body.email;
        // desestruturacao // const { email } = req.body; //

        let user = await User.findOne({ email: email});

        if (!user){
            user = await User.create({ email });
        }

        return res.json(user);
    }
};