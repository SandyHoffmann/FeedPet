const express = require("express");
const router = express.Router();

const usuariosController = require("../controllers/usuariosControllers");
const animaisController = require("../controllers/animaisControllers");
const postagensController = require("../controllers/postagensControllers");
const enderecosController = require("../controllers/enderecosControllers");
const authentication = require("../middlewares/authMiddleware");


//fazer validators

router.get("/", authentication(["usuario", "admin"]),usuariosController.getAll);

router.get("/animais/:id", authentication(["usuario", "admin"]),usuariosController.getAllAnimalsByUserId);

router.get("/postagens/:id", authentication(["usuario", "admin"]),usuariosController.getAllPostsByUserId);

router.post("/", authentication(["admin"]),usuariosController.create);

router.delete("/:id", authentication(["admin"]),usuariosController.deleteUser);

router.post("/animais/:id", authentication(["usuario", "admin"]), animaisController.criarParaUsuario);

router.post("/postagens/:id", authentication(["usuario", "admin"]), postagensController.criarPostagem);

router.post("/enderecos/:id_user", authentication(["usuario", "admin"]),enderecosController.defineEndereco);


module.exports = router;

