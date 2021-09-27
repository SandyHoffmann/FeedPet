const createError = require("http-errors");
const { Agenda,Usuario,Atividade } = require("../models");

async function mostrarAgendas() {
    return await Agenda.findAll();

}

async function mostrarAgendaEspecifica(id) {
    const agenda = await Agenda.findOne({
        where:
            { id_animal: id }
    });
    
    if (!agenda) throw createError(404, "Agenda não encontrado!");
    const atividades = await agenda.getAtividades({
        include:{
            model:Usuario,
            as:'usuario'
        }
    })

    return [agenda,atividades]
}
module.exports = {
    mostrarAgendas,
    mostrarAgendaEspecifica
}