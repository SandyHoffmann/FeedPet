const chatServices = require("../services/chatServices");

async function createChat(req, res, next) {    
    try {
        const endereco = await enderecosServices.defineEndereco(req.params.id_user,req.body);
        res.json(endereco);
    } catch (err) {
        console.log(err);
        next(err);
    }
}
