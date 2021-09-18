const agendasServices = require("../services/agendasServices");


async function getAllAgenda(req, res, next) {    
    try {
        const agendas = await agendasServices.mostrarAgendas();
        res.json(agendas);
    } catch (err) {
        console.log(err);
        next(err);
    }
}
async function getAnimalAgenda(req, res, next) {    
    try {
        const agenda = await agendasServices.mostrarAgendaEspecifica(req.params.id_animal);
        console.log(agenda)
        res.json(agenda);
        
    } catch (err) {
        console.log(err);
        next(err);
    }
}
module.exports = {
    getAllAgenda,
    getAnimalAgenda
}
