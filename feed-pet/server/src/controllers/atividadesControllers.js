const atividadesServices = require("../services/atividadesServices");

async function createAtividade(req, res, next) {    
    try {
        const atividade = await atividadesServices.createAtividadeparaAgenda(req.params.id_agenda,req.params.id_usuario,req.body);
        res.json(atividade);
    } catch (err) {
        console.log(err);
        next(err);
    }
}
async function listarAtividades(req, res, next) {    
    try {
        const atividades = await atividadesServices.listarAtividades(req.params.id);
        res.json(atividades);
    } catch (err) {
        console.log(err);
        next(err);
    }
}
module.exports = {
    createAtividade,
    listarAtividades
}