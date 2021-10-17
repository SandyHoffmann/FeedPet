const router = require("express").Router();
const chatControllers = require("../controllers/chatControllers");
const authentication = require("../middlewares/authMiddleware");
const chatValidations = require("../validations/chatValidations");

router.get("/", authentication(["usuario", "admin"]), chatControllers.getChats);
router.get("/:id_chat", authentication(["usuario", "admin"]), chatControllers.getMensagens);
router.post("/", chatValidations.postChat, authentication(["usuario", "admin"]),chatControllers.createChat);
router.post("/mensagem/:id_chat", chatValidations.post, authentication(["usuario", "admin"]),chatControllers.createMensagem);

module.exports = router;