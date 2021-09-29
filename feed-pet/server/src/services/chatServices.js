const createError = require("http-errors");
const { Chat, Usuario, Mensagem, sequelize } = require("../models");

async function addChat(id_usuario, parametros) {
    const { nome, descricao, usuarios } = parametros

    usuarios.push(id_usuario)

    let usuariosChat = await Usuario.findAll({ where: { id: usuarios } })

    if (!usuariosChat) throw createError(404, "Usuario não encontrado!");

    const chat = await Chat.create({ nome, descricao });

    await chat.addUsuario(usuariosChat)
    
    return chat
}

async function addMensagem(id_usuario, id_chat, mensagem){
    const { conteudo } = mensagem
    let usuario = await Usuario.findOne({ where: { id: id_usuario }} )

    if (!usuario) throw createError(404, "Usuario não encontrado!");

    let chat = await Chat.findOne({ where: { id: id_chat },include:"usuario" })
    if (!chat) throw createError(404, "Chat não encontrado!");

    usuarioChat = await chat.usuario.find( usuario => usuario.id == id_usuario);
    if (!usuarioChat) throw createError(403, "Usuario não pertence ao chat!");

    let mensagemCriada = await Mensagem.create({conteudo,id_usuario,id_chat})

    return mensagemCriada
}

module.exports = {
    addChat,
    addMensagem
}