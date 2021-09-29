const enderecosServices = require("../services/enderecosServices");

async function defineEndereco(req, res, next) {    
    try {
        const endereco = await enderecosServices.defineEndereco(res.locals.userId,req.body);
        res.json(endereco);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function getEndereco(req, res, next){    
    try {
        const enderecos = await enderecosServices.getEndereco();
        res.json(enderecos);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

module.exports = {
    defineEndereco,
    getEndereco
}