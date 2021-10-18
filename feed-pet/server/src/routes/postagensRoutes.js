const express = require("express");
const router = express.Router();

const usuariosController = require("../controllers/usuariosControllers");
const postagensController = require("../controllers/postagensControllers");
const authentication = require("../middlewares/authMiddleware");

router.get("/",  postagensController.getAll);
router.get("/:id",  postagensController.getPostOwner);
router.get("/:id_post/curtidas", postagensController.getAllCurtidas);

router.delete("/:id",authentication(["usuario", "admin"]),postagensController.deletePost);
router.get("/:id_post/comentarios", postagensController.getComentariosPostagem);
router.post("/:id_post/comentarios", authentication(["usuario", "admin"]), postagensController.createComentario);
router.post("/:id_post/curtidas", authentication(["usuario", "admin"]), postagensController.createCurtida);

module.exports = router;