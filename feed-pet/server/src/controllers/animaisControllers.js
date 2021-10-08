const animaisServices = require("../services/animaisServices");

async function getEspecific(req, res, next) {    
    try {
        const animal = await animaisServices.getEspecific(req.params.id);
        res.json(animal);

    } catch (err) {
        console.log(err);
        next(err);
    }
}
async function getAll(req, res, next) {    
    try {
        const animais = await animaisServices.getAnimais();

        res.json(animais);

    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function deleteAnimal(req, res, next) {
    try {
        const animalDeleteado = await animaisServices.deleteAnimal(req.params.id);
        res.json(animalDeleteado);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function criarParaUsuario(req, res, next) {
    console.log(req.body)
    try {        
        let animal = req.body
        let avatar = "dogdefault.jpg"
        if (animal.tipo_animal == 'gato'){
            avatar = "catdefault.jpg"
        }
        let key
        console.log(req.file)
        if (req.file){
            avatar = req.file.location
            key = req.file.key
        }
        const animais = await animaisServices.createAnimalparaUsuario(res.locals.userId, animal,avatar,key)

        res.status(201).json(animais);
    } catch (err) {

        next(err);
    }
}

async function getAllByAnimalId(req, res, next) {    
    try {
        const usuarios = await animaisServices.acharUsuariosAnimal(req.params.id);
        res.json(usuarios);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

module.exports = {
    getAll,
    criarParaUsuario,
    getAllByAnimalId,
    deleteAnimal,
    getEspecific
}