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

router.get("/", authentication(["usuario", "admin"]),usuariosController.getAll);

router.get("/chat-users", authentication(["usuario", "admin"]),usuariosController.getUsuariosSemUsuarioLogado);

router.get("/:id", authentication(["usuario", "admin"]),usuariosController.getUser);

router.get("/animais/:id", authentication(["usuario", "admin"]),usuariosController.getAllAnimalsByUserId);

router.get("/postagens/:id", authentication(["usuario", "admin"]),usuariosController.getAllPostsByUserId);
// cadastroValidations.post,
router.post("/", upload.single('avatar'),  usuariosController.create);

router.delete("/:id", authentication(["admin"]),usuariosController.deleteUser);

router.post("/animais/:id", authentication(["usuario", "admin"]), animaisController.criarParaUsuario);

router.post("/postagens", postagemValidations.post, authentication(["usuario", "admin"]), postagensController.criarPostagem);

router.post("/enderecos/:id_user", authentication(["usuario", "admin"]),enderecosController.defineEndereco);


module.exports = router;

