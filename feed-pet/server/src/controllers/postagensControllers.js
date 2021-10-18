const postagensServices = require("../services/postagensServices");
const comentariosServices = require("../services/comentariosServices");
const curtidasServices = require("../services/curtidasServices");

async function criarPostagem(req, res, next) {
    try {        
        const postagem = await postagensServices.createPostagem(res.locals.userId, req.body)

        res.status(201).json(postagem);
    } catch (err) {
        console.log(err.message);
        next(err);
    }
}

async function deletePost(req, res, next) {
    try {        
        const deletar = await postagensServices.deletePost(res.locals.userId, req.params.id)

        res.status(201).json();

    } catch (err) {
        console.log(err.message);
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

async function getAllCurtidas(req, res, next) {    
    try {
        const curtidas = await curtidasServices.getCurtida(req.params.id_post);
        res.json(curtidas);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function getPostOwner(req, res, next) {    
    try {
        const usuario = await postagensServices.acharUsuarioPostagem(res.locals.userId);
        res.json(usuario);
    } catch (err) {
        console.log(err);
        next(err);
    }
}


async function createComentario(req, res, next) {    
    try {
        const comentario = await comentariosServices.createComentario(res.locals.userId,req.params.id_post,req.body);
        res.json(comentario);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function createCurtida(req, res, next) {    
    try {
        const curtida = await curtidasServices.createCurtida(res.locals.userId,req.params.id_post,req.body);
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

async function deletePostagem(req, res, next) {
    try {
        const postagemDeleteada = await postagensServices.deletePost(req.params.id);
        res.json(postagemDeletada);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function deleteComentario(req, res, next) {
    try {
        const comentarioDeletado = await comentariosServices.deleteComent(req.params.id);
        res.json(comentarioDeletado);
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
    createCurtida,
    getAllCurtidas,
    deletePost,
    deletePostagem,
    deleteComentario
}