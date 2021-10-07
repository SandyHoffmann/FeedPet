const express = require("express");
const router = express.Router();

const alertasController = require("../controllers/alertasControllers");
const authentication = require("../middlewares/authMiddleware");

router.post("/:id_animal", authentication(["usuario", "admin"]),alertasController.criarParaAnimal);
router.get("/", authentication(["usuario", "admin"]),alertasController.getAll);

module.exports = router;