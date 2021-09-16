const express = require("express");
const router = express.Router();

const usuariosController = require("../controllers/usuariosControllers");
const animaisController = require("../controllers/animaisControllers");
const postagensController = require("../controllers/postagensControllers");
const enderecosController = require("../controllers/enderecosControllers");

const refreshTokensControllers = require("../controllers/refreshTokensControllers");


//fazer validators

router.get("/", usuariosController.getAll);

router.get("/animais/:id", usuariosController.getAllAnimalsByUserId);

router.get("/postagens/:id", usuariosController.getAllPostsByUserId);

router.post("/", usuariosController.create);

// router.post("/login", refreshController.login);

router.post("/animais/:id", animaisController.criarParaUsuario);

router.post("/postagens/:id", postagensController.criarPostagem);

router.post("/enderecos/:id_user", enderecosController.defineEndereco);

router.post("/login", refreshTokensControllers.login);
router.post("/refreshToken", refreshTokensControllers.refresh);

module.exports = router;

