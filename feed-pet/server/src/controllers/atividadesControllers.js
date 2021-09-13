const atividadesServices = require("../services/atividadesServices");

async function createAtividade(req, res, next) {    
    try {
        const atividade = await atividadesServices.createAtividadeparaAgenda(req.params.id_agenda,req.body);
        res.json(atividade);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

module.exports = {
    createAtividade
}