const express = require("express");
const router = express.Router();

const usuariosController = require("../controllers/usuariosController");
const animaisController = require("../controllers/animaisControllers");
const postagensController = require("../controllers/postagensControllers");

//fazer validators

router.get("/", usuariosController.getAll);

router.get("/animais/:id", usuariosController.getAllAnimalsByUserId);

router.get("/postagens/:id", usuariosController.getAllPostsByUserId);

router.post("/", usuariosController.create);

router.post("/:id/animais", animaisController.criarParaUsuario);

router.post("/:id/postagens", postagensController.criarPostagem);

module.exports = router;