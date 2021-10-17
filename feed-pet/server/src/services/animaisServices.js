const createError = require("http-errors");
const { Animal, Usuario, Agenda } = require("../models");

async function getAnimais() {    
    return await Animal.findAll();    
}

async function deleteAnimal(id) {
    return await Animal.destroy({
        where: { id:id} 
      });
}
async function getEspecific(id) {
    const animal = await Animal.findOne({ where: { id:id },include:"usuario"});
    if (!animal) throw createError(404, "Animal não encontrado!");    
    return animal;

}

async function createAnimalparaUsuario(id, novoAnimal,avatar,key) {
    const usuario = await Usuario.findOne({ where: { id:id } });
    if (!usuario) throw createError(404, "Usuário não encontrado!");    

    const { nome, cor, porte, sexo, tipo_animal, status, publico, idade} = novoAnimal;
    
    let raca = novoAnimal.raca
    if (tipo_animal === 'Cachorro'){
        raca = raca[0]
    } else{
        raca = raca[1]
    }
    const animal = await Animal.create({
        nome,raca,cor,porte,tipo_animal,status,sexo,publico,avatar,keyS3:key,idade
    })

    await usuario.addAnimal(animal);

    await Agenda.create({
        id_animal:animal.id
    })
    console.log(animal)

    return animal;
}

async function editarAnimal(id, animal, avatar, key) {
    const animalExiste = await Animal.findOne({ where: { id:id },include:"usuario" });
    if (!animalExiste) throw createError(404, "Animal não encontrado!");
    let valores = Object.entries(animal)
    console.log(valores)
    for (let valor of valores){
        if (animalExiste[valor[0]] !== valor[1] && valor[1].length>0){
            if (valor[0]==="raca"){
                if (animalExiste.tipo_animal==="Gato"){
                    animalExiste.raca = valor[1][1]
                    console.log(valor[1][1]+ " " + animalExiste[valor[0]])
                } else{
                    animalExiste.raca = valor[1][0]
                    console.log(valor[1][0] + " " + animalExiste[valor[0]])
                }
            } else{
                animalExiste[valor[0]] = valor[1]
                console.log(valor[1] + " " + animalExiste[valor[0]])
            }   
        }
    }
    if (avatar){
        animalExiste.avatar = avatar
        animalExiste.keyS3 = key
    }

    await animalExiste.save();

    return animalExiste
        // animalExiste.nome = animal.nome?||
    // animalExiste.raca = animal.raca
    // animalExiste.sexo = animal.sexo
    // animalExiste.cor = animal.cor
    // animalExiste.porte = animal.porte
    // animalExiste.status = animal.status
    // animalExiste.idade = animal.idade
    // animalExiste.avatar = animal.avatar

}

async function acharUsuariosAnimal(id) {
    const animal = await Animal.findOne({ where: { id:id } });
    if (!animal) throw createError(404, "Animal não encontrado!");
    return await animal.getUsuario();
}


module.exports = {
    createAnimalparaUsuario,
    acharUsuariosAnimal,
    getAnimais,
    deleteAnimal,
    getEspecific,
    editarAnimal
}
