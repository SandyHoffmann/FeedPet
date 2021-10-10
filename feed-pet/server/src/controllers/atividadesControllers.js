const atividadesServices = require("../services/atividadesServices");

async function createAtividade(req, res, next) {    
    console.log(res.locals)
    try {
        const atividade = await atividadesServices.createAtividadeparaAgenda(req.params.id_agenda,res.locals.userId,req.body);
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

async function deleteAtividade(req, res, next) {
    try {
        const atividadeDeletado = await atividadesServices.deleteAtividade(req.params.id);
        res.json(atividadeDeletado);
    } catch (err) {
        console.log(err);
        next(err);
    }
}
module.exports = {
    createAtividade,
    listarAtividades,
    deleteAtividade
}