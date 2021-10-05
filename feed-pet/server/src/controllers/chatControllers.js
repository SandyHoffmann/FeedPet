const { sequelize } = require("../models");
const chatServices = require("../services/chatServices");

async function createChat(req, res, next) {
    console.log(req.body)
    const transaction = await sequelize.transaction();  
    try {
        const chat = await chatServices.addChat(res.locals.userId,req.body);
        await transaction.commit();
        res.status(201).json(chat)

    } catch (err) {
        await transaction.rollback();
        next(err);
    }
}

async function createMensagem(req, res, next){
    
    try {
        const mensagem = await chatServices.addMensagem(res.locals.userId,req.params.id_chat,req.body);
        res.status(201).json(mensagem)

    } catch (err) {
        next(err);
    }
}

async function getMensagens(req, res, next){
    try {
        const mensagens = await chatServices.findMessages(req.params.id_chat);
        res.status(201).json(mensagens)

    } catch (err) {
        next(err);
    }
}

async function getChats(req, res, next){
    try {
        const chats = await chatServices.findChats(res.locals.userId);

        res.status(201).json(chats)
    } catch (err) {
        next(err);
    }
}
module.exports = {createChat,createMensagem,getMensagens,getChats};