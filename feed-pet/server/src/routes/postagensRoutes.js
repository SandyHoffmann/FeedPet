const express = require("express");
const router = express.Router();

const usuariosController = require("../controllers/usuariosControllers");
const postagensController = require("../controllers/postagensControllers");

router.get("/", postagensController.getAll);
router.get("/:id", postagensController.getPostOwner);
router.get("/:id_post/curtidas", postagensController.getAllCurtidas);

router.get("/:id_post/comentarios", postagensController.getComentariosPostagem);
router.post("/:id_user/:id_post/comentarios", postagensController.createComentario);
router.post("/:id_user/:id_post/curtidas", postagensController.createCurtida);

module.exports = router;