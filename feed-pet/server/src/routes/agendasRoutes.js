const express = require("express");
const router = express.Router();

const atividadesController = require("../controllers/atividadesControllers");
const agendasController = require("../controllers/agendaControllers");

const authentication = require("../middlewares/authMiddleware");

//fazer validators
// router.get("/", animaisController.getAll);
router.get("/", agendasController.getAllAgenda);
router.get("/:id_animal", agendasController.getAnimalAgenda);
router.post("/:id_agenda", authentication(["usuario", "admin"]), atividadesController.createAtividade);
router.get("/atividades/:id", atividadesController.listarAtividades);
router.delete("/:id", authentication(["admin"]),atividadesController.deleteAtividade);

module.exports = router;