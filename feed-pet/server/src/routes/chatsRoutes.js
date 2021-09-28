const router = require("express").Router();
const chatControllers = require("../controllers/chatControllers");

router.post("/:id_user", chatControllers.createChat);

module.exports = router;