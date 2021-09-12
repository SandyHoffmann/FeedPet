const usuariosServices = require("../services/usuariosServices");

async function getAll(req, res, next) {    
    try {
        const usuarios = await usuariosServices.getUsuarios();

        res.json(usuarios);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function create(req, res, next) {
    try {
        const usuario = req.body;
        const novoUsuario = await usuariosServices.createUsuario(usuario);
        res.status(201).json(novoUsuario);
    } catch (err) {
        console.log(err.message);
        next(err);
    }
}


module.exports = {
    getAll,
    create
};