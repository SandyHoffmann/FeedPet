const createError = require("http-errors");
const { Animal, Usuario } = require("../models");

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

    return animal;
}

module.exports = {
    createAnimalparaUsuario
}
