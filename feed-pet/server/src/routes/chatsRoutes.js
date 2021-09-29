const router = require("express").Router();
const chatControllers = require("../controllers/chatControllers");

router.post("/:id_user", chatControllers.createChat);
router.post("/mensagem/:id_usuario/:id_chat", chatControllers.createMensagem);

module.exports = router;