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
    getAll
}