const { sequelize } = require("../models");
const chatServices = require("../services/chatServices");

async function createChat(req, res, next) {

    const transaction = await sequelize.transaction();  
    try {
        const chat = await chatServices.addChat(req.params.id_user,req.body);
        await transaction.commit();
        res.status(201).json(chat)

    } catch (err) {
        await transaction.rollback();
        next(err);
    }
}

async function createMensagem(req, res, next){
    
    try {
        const mensagem = await chatServices.addMensagem(req.params.id_usuario,req.params.id_chat,req.body);
        res.status(201).json(mensagem)

    } catch (err) {
        next(err);
    }
}
module.exports = {createChat,createMensagem};