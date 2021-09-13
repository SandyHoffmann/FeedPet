const express = require("express");
const router = express.Router();

const usuariosController = require("../controllers/usuariosController");
const animaisController = require("../controllers/animaisControllers");

//fazer validators
router.get("/", animaisController.getAll);
router.get("/:id", animaisController.getAllByAnimalId);

module.exports = router;