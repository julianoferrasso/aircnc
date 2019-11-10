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

const Spot = require('../models/Spot');
const User = require('../models/User');


module.exports = {
    // lista todos os Spots
    async index(req, res) {
        const { tech } = req.query;

        const spots = await Spot.find({ techs: tech})

        return res.json(spots);
    },

    //cria Spot
    async store(req, res) {
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;

        const user = await User.findById(user_id);

        if (!user) {
            return res.status(400).json({ error: 'User does not exists' });
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map( tech => tech.trim()),
            price
        })

        return res.json(spot)
    }
};