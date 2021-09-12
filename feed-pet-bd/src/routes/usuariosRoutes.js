const express = require("express");
const router = express.Router();

const usuariosController = require("../controllers/usuariosController");
const animaisController = require("../controllers/animaisControllers");

//fazer validators

router.get("/", usuariosController.getAll);

router.post("/", usuariosController.create);

router.post("/:id/animais", animaisController.criarParaUsuario);

module.exports = router;