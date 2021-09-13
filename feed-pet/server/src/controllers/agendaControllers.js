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

module.exports = {
    getAllAgenda
}
