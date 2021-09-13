const express = require("express");
const router = express.Router();

const atividadesController = require("../controllers/atividadesControllers");
const agendasController = require("../controllers/agendaControllers");

//fazer validators
// router.get("/", animaisController.getAll);
router.get("/", agendasController.getAllAgenda);
router.post("/:id_agenda", atividadesController.createAtividade);

module.exports = router;