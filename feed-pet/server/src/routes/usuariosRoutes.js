const express = require("express");
const router = express.Router();
// const multer  = require('multer');
// const upload = multer({ dest: './uploads' });
const usuariosController = require("../controllers/usuariosControllers");
const animaisController = require("../controllers/animaisControllers");
const postagensController = require("../controllers/postagensControllers");
const enderecosController = require("../controllers/enderecosControllers");
const authentication = require("../middlewares/authMiddleware");
const upload = require("../middlewares/multer")

const postagemValidations = require("../validations/postagemValidations");
const cadastroValidations = require("../validations/cadastroValidations");

//fazer validators

router.get("/", usuariosController.getAll);
router.get("/chat-users", authentication(["usuario", "admin"]),usuariosController.getUsuariosSemUsuarioLogado);
router.get("/:id", usuariosController.getUser);
router.get("/animais/:id", usuariosController.getAllAnimalsByUserId);
router.get("/postagens/:id", authentication(["usuario", "admin"]),usuariosController.getAllPostsByUserId);
// cadastroValidations.post,
router.post("/", upload.single('avatar'), cadastroValidations.post, usuariosController.create);

router.delete("/:id", authentication(["admin"]),usuariosController.deleteUser);
router.post("/animais/:id", upload.single('avatar'), authentication(["usuario", "admin"]), animaisController.criarParaUsuario);
router.post("/postagens", postagemValidations.post, authentication(["usuario", "admin"]), postagensController.criarPostagem);
router.post("/enderecos/:id_user", authentication(["usuario", "admin"]),enderecosController.defineEndereco);
router.put("/:id", upload.single('avatar'), authentication(["usuario", "admin"]),usuariosController.editUser);


module.exports = router;

