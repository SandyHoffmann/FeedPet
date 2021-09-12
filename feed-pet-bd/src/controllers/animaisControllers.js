const animaisServices = require("../services/animaisServices");

async function criarParaUsuario(req, res, next) {
    try {        
        const animais = await animaisServices.createAnimalparaUsuario(req.params.id, req.body)

        res.status(201).json(animais);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

module.exports = {
    criarParaUsuario
}