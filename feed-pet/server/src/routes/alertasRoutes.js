const express = require("express");
const router = express.Router();

const alertasController = require("../controllers/alertasControllers");
const authentication = require("../middlewares/authMiddleware");

router.post("/:id_animal", authentication(["usuario", "admin"]),alertasController.criarParaAnimal);
router.get("/", authentication(["usuario", "admin"]),alertasController.getAll);
router.put("/:id", authentication(["usuario", "admin"]), alertasController.editAlerta);
router.get("/:user_id", authentication(["usuario", "admin"]),alertasController.getAllAlertasByEndereco);

module.exports = router;
