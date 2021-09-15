const express = require("express");
const router = express.Router();

const usuariosController = require("../controllers/usuariosControllers");
const animaisController = require("../controllers/animaisControllers");
const postagensController = require("../controllers/postagensControllers");
const enderecosController = require("../controllers/enderecosControllers");

//fazer validators

router.get("/", usuariosController.getAll);

router.get("/animais/:id", usuariosController.getAllAnimalsByUserId);

router.get("/postagens/:id", usuariosController.getAllPostsByUserId);

router.post("/", usuariosController.create);

router.post("/animais/:id", animaisController.criarParaUsuario);

router.post("/postagens/:id", postagensController.criarPostagem);

router.post("/enderecos/:id_user", enderecosController.defineEndereco);

module.exports = router;

