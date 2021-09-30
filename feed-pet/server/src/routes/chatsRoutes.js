const router = require("express").Router();
const chatControllers = require("../controllers/chatControllers");
const authentication = require("../middlewares/authMiddleware");

router.get("/", authentication(["usuario", "admin"]), chatControllers.getChats);
router.get("/:id_chat", chatControllers.getMensagens);
router.post("/", chatControllers.createChat);
router.post("/mensagem/:id_usuario/:id_chat", chatControllers.createMensagem);

module.exports = router;