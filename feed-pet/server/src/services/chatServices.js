const createError = require("http-errors");
const { QueryTypes } = require("sequelize");
const { Chat, Usuario, Mensagem, sequelize } = require("../models");

async function addChat(id_usuario, parametros) {
    console.log(parametros)
    const { nome, descricao, usuarios } = parametros
    console.log(id_usuario)
    usuarios.push(id_usuario)

    let usuariosChat = await Usuario.findAll({ where: { id: usuarios } })

    if (!usuariosChat) throw createError(404, "Usuario não encontrado!");

    const chat = await Chat.create({ nome, descricao });

    await chat.addUsuario(usuariosChat)

    const chatFinal = await Chat.findOne({where:{
                                            id: chat.id
                                            },
                                            include: {
                                                model: Usuario,
                                                as: 'usuario'
                                            }
                                        })
    return chatFinal
}

async function addMensagem(id_usuario, id_chat, mensagem) {
    const { conteudo } = mensagem
    let usuario = await Usuario.findOne({ where: { id: id_usuario } })

    if (!usuario) throw createError(404, "Usuario não encontrado!");

    let chat = await Chat.findOne({ where: { id: id_chat }, include: "usuario" })
    if (!chat) throw createError(404, "Chat não encontrado!");

    usuarioChat = await chat.usuario.find(usuario => usuario.id == id_usuario);
    if (!usuarioChat) throw createError(403, "Usuario não pertence ao chat!");

    let mensagemCriada = await Mensagem.create({ conteudo, id_usuario, id_chat })

    return mensagemCriada
}

async function findMessages(id_chat) {
    let chat = await Chat.findOne({ where: { id: id_chat } ,include:"usuario"})
    if (!chat) throw createError(404, "Chat não encontrado!");
    let mensagens = await Mensagem.findAll({ where: { id_chat } })
    return [mensagens,chat]
}

async function findChats(id_usuario) {
    let chat = await sequelize.query(`SELECT 
        chats.id as "id_chat",
        chats.nome as "nome_chat"
    FROM
        chat_usuarios
    INNER JOIN 
        usuarios 
    ON
        usuarios.id = chat_usuarios.id_usuario
    INNER JOIN
        chats
    ON
        chats.id = chat_usuarios.id_chat
    WHERE 
        usuarios.id = '${id_usuario}'
    ;
    `,{
        replacements: [id_usuario],
        type:QueryTypes.SELECT
    })
    console.log(chat.map(chats => {chats.id}))
    chatsDoUsuario = await Chat.findAll({where:{
                                        id: chat.map(chats => chats.id_chat)
                                    },
                                    include: {
                                        model: Usuario,
                                        as: 'usuario'
                                    }
                                })
    const mensagens = []
    let msg = ""
    for (let chat of chatsDoUsuario){
        msg = await chat.getMensagems()
        console.log(msg[msg.length -1])
        mensagens.push(msg[msg.length -1])
    }

    return [chatsDoUsuario,mensagens];
}

module.exports = {
    addChat,
    addMensagem,
    findMessages,
    findChats
}