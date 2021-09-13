const postagensServices = require("../services/postagensServices");
const comentariosServices = require("../services/comentariosServices");
const curtidasServices = require("../services/curtidasServices");

async function criarPostagem(req, res, next) {
    try {        
        const postagem = await postagensServices.createPostagem(req.params.id, req.body)

        res.status(201).json(postagem);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function getAll(req, res, next) {    
    try {
        const postagens = await postagensServices.getPostagem();
        res.json(postagens);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function getPostOwner(req, res, next) {    
    try {
        const usuario = await postagensServices.acharUsuarioPostagem(req.params.id);
        res.json(usuario);
    } catch (err) {
        console.log(err);
        next(err);
    }
}


async function createComentario(req, res, next) {    
    try {
        const comentario = await comentariosServices.createComentario(req.params.id_user,req.params.id_post,req.body);
        res.json(comentario);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function createCurtida(req, res, next) {    
    try {
        const curtida = await curtidasServices.createCurtida(req.params.id_user,req.params.id_post,req.body);
        res.json(curtida);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function getComentariosPostagem(req, res, next) {    
    try {
        const comentarios = await comentariosServices.acharComentariosPost(req.params.id_post);
        res.json(comentarios);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

module.exports = {
    criarPostagem,
    getAll,
    getPostOwner,
    createComentario,
    getComentariosPostagem,
    createCurtida
}