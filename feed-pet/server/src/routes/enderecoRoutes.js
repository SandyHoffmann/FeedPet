const express = require("express");
const router = express.Router();

const enderecosController = require("../controllers/enderecosControllers");
const authentication = require("../middlewares/authMiddleware");

router.get("/", authentication(["usuario", "admin"]), enderecosController.getEndereco);

module.exports = router;