const express = require("express");
const router = express.Router();

const atividadesController = require("../controllers/atividadesControllers");
const agendasController = require("../controllers/agendaControllers");

//fazer validators
// router.get("/", animaisController.getAll);
router.get("/", agendasController.getAllAgenda);
router.get("/:id_animal", agendasController.getAnimalAgenda);
router.post("/:id_agenda/:id_usuario", atividadesController.createAtividade);
router.get("/atividades/:id", atividadesController.listarAtividades);

module.exports = router;