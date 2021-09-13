const express = require("express");
const router = express.Router();

const usuariosController = require("../controllers/usuariosController");
const postagensController = require("../controllers/postagensControllers");

router.get("/", postagensController.getAll);
router.get("/:id", postagensController.getPostOwner);
router.get("/:id_post/comentarios", postagensController.getComentariosPostagem);
router.post("/:id_user/:id_post/comentario", postagensController.createComentario);
router.post("/:id_user/:id_post/curtida", postagensController.createCurtida);

module.exports = router;