const createError = require("http-errors");
const { Agenda, Atividade } = require("../models");



async function createAtividadeparaAgenda(id, atividade) {
    const agenda = await Agenda.findOne({ where: { id:id } });

    if (!agenda) throw createError(404, "Agenda não encontrada!");    

    const { atividade_feita, data_atividade } = atividade;
    
    const atividadeCriada = await Atividade.create({
        atividade_feita, data_atividade, agenda_id:agenda.id
    })

    return atividadeCriada;
}

module.exports = {
    createAtividadeparaAgenda
}