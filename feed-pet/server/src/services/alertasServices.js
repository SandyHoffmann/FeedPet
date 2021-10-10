const createError = require("http-errors");
const { Alerta, Animal } = require("../models");

async function createAlertaparaAnimal(id_animal, novoAlerta) {
    const animal = await Animal.findOne({ where: { id:id_animal } });
    if (!animal) throw createError(404, "Animal não encontrado!");    

    const usuario = await Usuario.findOne({ where: { id:animal.user_id } });
    if (!usuario) throw createError(404, "Usuário não encontrado!");    

    const endereco = await Endereco.findOne({ where: { id:usuario.endereco_id } });
    if (!endereco) throw createError(404, "Endereço não encontrado!");    

    const { descricao,local,dataDesaparecimento } = novoAlerta;
    
    const alerta = await Alerta.create({
        descricao,local,dataDesaparecimento,id_animal:id_animal,cidade:endereco.cidade
    })
    animal.status="Desaparecido"
    animal.save()
    return alerta;
}

async function editarAlerta(id, alerta) {
    const alertaExiste = await Alerta.findOne({ where: { id:id } });
    if (!alertaExiste) throw createError(404, "Alerta não encontrado!");
    alertaExiste.descricao = alerta.descricao
    await alertaExiste.save();
}

async function getAlertasByEndereco(user_id) {
    const usuario = await Usuario.findOne({ where: {id:user_id} });
    if (!usuario) throw createError(404, "Usuário não encontrado!");
    const endereco = await endereco.findOne({ where: {id:usuario.endereco_id}})
    return await Alerta.findAll({ where: {cidade:endereco.cidade} })
}

async function getAlertas() {    
    return await Alerta.findAll();    
}

module.exports = {
    createAlertaparaAnimal,
    getAlertas,
    editarAlerta,
    getAlertasByEndereco
}