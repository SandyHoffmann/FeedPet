const createError = require("http-errors");
const { Agenda } = require("../models");

async function mostrarAgendas() {
    return await Agenda.findAll();    

}

async function mostrarAgendaEspecifica(id){
    const agenda = await Agenda.findOne({ where: { id_animal:id } });
    if (!agenda) throw createError(404, "Agenda não encontrado!");
    return agenda
}
module.exports = {
    mostrarAgendas,
    mostrarAgendaEspecifica
}