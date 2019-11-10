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

const Booking = require('../models/Booking');


module.exports = {   
    //cria Reserva
    async store(req, res) {
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        });

        await booking.populate('spot').populate('user').execPopulate();

        return res.json(booking);
    }
};