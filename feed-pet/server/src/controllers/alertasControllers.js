const alertasServices = require("../services/alertasServices");

async function criarParaAnimal(req, res, next) {
    try {        
        console.log(req.body)
        const alertas = await alertasServices.createAlertaparaAnimal(res.locals.userId, req.params.id_animal, req.body  )
        res.status(201).json(alertas);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function editAlerta(req, res, next) {
    try {
        const alertaEditado = await alertasServices.editarAlerta(req.params.id, req.body);
        res.json(alertaEditado);
    } catch (err) {
        console.log(err);
        next(err);
    }
}
async function concluirAlerta(req, res, next) {
    try {
        const alertaEditado = await alertasServices.concluirAlerta(req.params.id_alerta, req.params.id_animal);
        res.json(alertaEditado);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function getAllAlertasByEndereco(req, res, next) {
    try {
        const alertas = await alertasServices.getAlertasByEndereco(user_id);

        res.json(alertas);

    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function getAll(req, res, next) {    
    try {
        const alertas = await alertasServices.getAlertas();

        res.json(alertas);

    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function getAlertaAnimal(req, res, next){
    try {
        const alerta = await alertasServices.getAlerta(req.params.id_animal);
        res.json(alerta);
    } catch (err) {
        console.log(err);
        next(err);
    }
}
module.exports = {
    criarParaAnimal,
    getAll,
    editAlerta,
    getAllAlertasByEndereco,
    getAlertaAnimal,
    concluirAlerta
}