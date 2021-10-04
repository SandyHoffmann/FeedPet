const usuariosServices = require("../services/usuariosServices");

async function deleteUser(req, res, next) {
    try {
        const usuarioDeleteado = await usuariosServices.deleteUsuario(req.params.id);
        res.json(usuarioDeleteado);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function getUser(req, res, next) {    
    try {
        const usuario = await usuariosServices.getUsuario(req.params.id);
        res.json(usuario);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function getUsuariosSemUsuarioLogado(req, res, next){
    try {
        const usuarios = await usuariosServices.getUsuariosSemUsuarioLogado(res.locals.userId);
        res.json(usuarios);
    } catch (err) {
        console.log(err);
        next(err);
    }
}
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
        console.log(req.body)
        res.status(201).json(novoUsuario);
    } catch (err) {
        console.log(err.message);
        next(err);
    }
}

async function getAllAnimalsByUserId(req, res, next) {    
    try {
        const animais = await usuariosServices.acharAnimaisUsuario(req.params.id);
        res.json(animais);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function getAllPostsByUserId(req, res, next) {    
    try {
        const postagem = await usuariosServices.acharPostagensUsuario(req.params.id);
        res.json(postagem);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

module.exports = {
    getAll,
    create,
    getAllAnimalsByUserId,
    getAllPostsByUserId,
    deleteUser,
    getUser,
    getUsuariosSemUsuarioLogado
};