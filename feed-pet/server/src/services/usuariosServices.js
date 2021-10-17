const createError = require("http-errors");
const { Usuario,Postagem, } = require("../models");
const { Op } = require("sequelize");

async function getUsuarios() {    
    return await Usuario.findAll();    
}


async function getUsuariosSemUsuarioLogado(usuario_logado) {    
    return await Usuario.findAll(
        {where:{
            [Op.not]:{id:[usuario_logado]}
        }
    }
    );    
}

async function getUsuario(id) {
    return await Usuario.findOne({
        where:{id:id}
    })
}
async function deleteUsuario(id) {
    return await Usuario.destroy({
        where: { id:id} 
      });
}

async function createUsuario(usuario,avatar,key) {
    const usuarioJaExiste = await Usuario.findOne({
        where: {
            email: usuario.email
        }
    });
    if (usuarioJaExiste) throw new createError(409, "Usuário já existe!");
    const { nome, email, senha } = usuario;
    const usuarioCriado =  await Usuario.create({ nome, email, senha, avatar:avatar,keyS3:key });
    return usuarioCriado
}

async function editarUsuario(id, usuario,avatar,key) {
    const usuarioExiste = await Usuario.findOne({ where: { id:id } });
    if (!usuarioExiste) throw createError(404, "Usuário não encontrado!");
    let valores = Object.entries(usuario)
    console.log(valores)
    for (let valor of valores){
        if (usuarioExiste[valor[0]] !== valor[1] && valor[1].length>0){
            usuarioExiste[valor[0]] = valor[1]
            console.log(valor[1] + " " + usuarioExiste[valor[0]])
        }
    }
    if (avatar){
        usuarioExiste.avatar = avatar
        usuarioExiste.keyS3 = key
    }

    // usuarioExiste.senha = usuario.senha
    // usuarioExiste.nome = usuario.nome
    // usuarioExiste.telefone = usuario.telefone
    await usuarioExiste.save();
    return usuarioExiste
}

async function acharAnimaisUsuario(id) {
    const usuario = await Usuario.findOne({ where: { id:id } });
    if (!usuario) throw createError(404, "Usuário não encontrado!");
    console.log(usuario)
    return await usuario.getAnimal();
}

async function acharPostagensUsuario(id) {
    const usuario = await Usuario.findOne({ where: { id:id } });
    if (!usuario) throw createError(404, "Usuário não encontrado!");
    console.log(usuario)
    const postagens = await Postagem.findAll({ where: { user_id:id } });
    return postagens;
}

module.exports = {
    getUsuarios,
    createUsuario,
    acharAnimaisUsuario,
    acharPostagensUsuario,
    deleteUsuario,
    getUsuario,
    getUsuariosSemUsuarioLogado,
    editarUsuario
}
