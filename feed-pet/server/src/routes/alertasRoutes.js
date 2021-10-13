const express = require("express");
const router = express.Router();

const alertasController = require("../controllers/alertasControllers");
const authentication = require("../middlewares/authMiddleware");

router.post("/:id_animal", authentication(["usuario", "admin"]),alertasController.criarParaAnimal);
router.get("/", alertasController.getAll);
router.get("/:id_animal", alertasController.getAlertaAnimal);
router.put("/:id", authentication(["usuario", "admin"]), alertasController.editAlerta);
router.get("/editar/:user_id", authentication(["usuario", "admin"]),alertasController.getAllAlertasByEndereco);
router.put("/:id_alerta/:id_animal", authentication(["usuario", "admin"]), alertasController.concluirAlerta);

module.exports = router;
