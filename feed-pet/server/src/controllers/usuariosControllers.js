const { ExcluirFoto } = require("../middlewares/removeFoto");
const usuariosServices = require("../services/usuariosServices");

async function deleteUser(req, res, next) {
    try {
        const usuarioDeletado = await usuariosServices.deleteUsuario(req.params.id);
        res.json(usuarioDeletado);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function editUser(req, res, next) {
    try {
        console.log(req.body)
        let avatar
        let key
        if (req.file){
            avatar = req.file.location
            key = req.file.key
        }
        const usuarioEditado = await usuariosServices.editarUsuario(req.params.id, req.body, avatar, key);
        res.json(usuarioEditado);
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
        let avatar = "https://feedpet.s3.amazonaws.com/default.jpg"
        let key=""
        if (req.file){
            avatar = req.file.location
            key = req.file.key

        }
        
        const novoUsuario = await usuariosServices.createUsuario(usuario,avatar,key);
        res.status(201).json(novoUsuario);
    } catch (err) {
        console.log(err.message);
        // if (req.file?.filename){
        //     ExcluirFoto(req.file?.filename)
        // }
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
    getUsuariosSemUsuarioLogado,
    editUser
};