const createError = require("http-errors");
const { Animal, Usuario, Agenda } = require("../models");

async function getAnimais() {    
    return await Animal.findAll();    
}

async function createAnimalparaUsuario(id, novoAnimal) {
    console.log(id)
    const usuario = await Usuario.findOne({ where: { id:id } });
    console.log(usuario)
    if (!usuario) throw createError(404, "Usuário não encontrado!");    

    const { nome, raca, cor, porte, tipo_animal, status } = novoAnimal;
    
    const animal = await Animal.create({
        nome,raca,cor,porte,tipo_animal,status
    })

    await usuario.addAnimal(animal);

    await Agenda.create({
        id_animal:animal.id
    })

    return animal;
}


async function acharUsuariosAnimal(id) {
    const animal = await Animal.findOne({ where: { id:id } });
    if (!animal) throw createError(404, "Animal não encontrado!");
    return await animal.getUsuario();
}


module.exports = {
    createAnimalparaUsuario,
    acharUsuariosAnimal,
    getAnimais
}
