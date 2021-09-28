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

module.exports = {createChat};