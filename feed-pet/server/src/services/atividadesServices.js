const createError = require("http-errors");
const { Agenda, Atividade } = require("../models");



async function createAtividadeparaAgenda(id, id_usuario, atividade) {
    console.log(id_usuario)
    const agenda = await Agenda.findOne({ where: { id:id } });

    if (!agenda) throw createError(404, "Agenda não encontrada!");    

    const { atividade_feita, data_atividade } = atividade;
    
    const atividadeCriada = await Atividade.create({
        atividade_feita, data_atividade:data_atividade, agenda_id:agenda.id, user_id:id_usuario
    })

    return atividadeCriada;
}

async function deleteAtividade(id) {
    return await Atividade.destroy({
        where: { id:id} 
      });
}

async function listarAtividades(id){
    const agenda = await Agenda.findOne({ where: { id:id } });

    if (!agenda) throw createError(404, "Agenda não encontrada!");    
    
    const atividades = await Atividade.findAll({
        where: {
            agenda_id:id
        }
    })

    return atividades
}

module.exports = {
    createAtividadeparaAgenda,
    listarAtividades,
    deleteAtividade
}