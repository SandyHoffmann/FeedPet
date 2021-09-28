const createError = require("http-errors");
const { Chat, Usuario, sequelize } = require("../models");

async function addChat(id_usuario, parametros) {
    const { nome, descricao, usuarios } = parametros

    usuarios.push(id_usuario)

    let usuariosChat = await Usuario.findAll({ where: { id: usuarios } })

    if (!usuariosChat) throw createError(404, "Usuario não encontrado!");

    const chat = await Chat.create({ nome, descricao });

    await chat.addUsuario(usuariosChat)
    
    return chat
}

module.exports = {
    addChat
}