const router = require("express").Router();
const chatControllers = require("../controllers/chatControllers");

router.post("/", chatControllers.createChat);

module.exports = router;