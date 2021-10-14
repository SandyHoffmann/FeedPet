const createError = require("http-errors");
const { Alerta, Animal, Usuario, Endereco } = require("../models");

async function createAlertaparaAnimal(user_id, id_animal, novoAlerta) {

    const animal = await Animal.findOne({ where: { id:id_animal } });
    if (!animal) throw createError(404, "Animal não encontrado!");    

    const usuario = await Usuario.findOne({ where: { id:user_id } });
    if (!usuario) throw createError(404, "Usuário não encontrado!");    

    // const endereco = await Endereco.findOne({ where: { id:usuario.endereco_id } });
    // if (!endereco) throw createError(404, "Endereço não encontrado!");    

    let { descricao,local,dataDesaparecimento,cidade } = novoAlerta;
    const { lat, lng } = local;
    local = `${lat} ${lng}`  
    const alerta = await Alerta.create({
        descricao,local,dataDesaparecimento,id_animal:id_animal,cidade:cidade
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

async function concluirAlerta(id_alerta,id_animal) {
    const alertaExiste = await Alerta.findOne({ where: { id:id_alerta } });
    if (!alertaExiste) throw createError(404, "Alerta não encontrado!");
    console.log(alertaExiste.concluido)
    alertaExiste.concluido = 1
    await alertaExiste.save();
    console.log(alertaExiste)
    const animal = await Animal.findOne({ where: { id:id_animal } });
    animal.status="Tem dono"
    await animal.save()
    return animal
}


async function getAlertasByEndereco(user_id) {
    const usuario = await Usuario.findOne({ where: {id:user_id} });
    if (!usuario) throw createError(404, "Usuário não encontrado!");
    const endereco = await Endereco.findOne({ where: {id:usuario.endereco_id}})
    return await Alerta.findAll({ where: {cidade:endereco.cidade} })
}

async function getAlertas() {    
    return await Alerta.findAll({include:"animal"});    
}

async function getAlerta(id_animal){
    return await Alerta.findOne({where: {
        id_animal:id_animal,concluido:false}});    

}
module.exports = {
    createAlertaparaAnimal,
    getAlertas,
    editarAlerta,
    getAlertasByEndereco,
    getAlerta,
    concluirAlerta
}