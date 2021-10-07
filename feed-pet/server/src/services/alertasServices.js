const createError = require("http-errors");
const { Alerta, Animal } = require("../models");

async function createAlertaparaAnimal(id_animal, novoAlerta) {
    console.log(id_animal)
    const animal = await Animal.findOne({ where: { id:id_animal } });
    console.log(animal)
    if (!animal) throw createError(404, "Animal não encontrado!");    

    const { descricao,local,dataDesaparecimento } = novoAlerta;
    
    const alerta = await Alerta.create({
        descricao,local,dataDesaparecimento,id_animal:id_animal
    })
    
    return alerta;
}

async function getAlertas() {    
    return await Alerta.findAll();    
}

module.exports = {
    createAlertaparaAnimal,
    getAlertas
}