const alertasServices = require("../services/alertasServices");

async function criarParaAnimal(req, res, next) {
    try {        
        const alertas = await alertasServices.createAlertaparaAnimal(req.params.id_animal, req.body)

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

module.exports = {
    criarParaAnimal,
    getAll,
    editAlerta,
    getAllAlertasByEndereco
}