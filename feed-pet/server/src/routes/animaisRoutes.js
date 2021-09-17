const express = require("express");
const router = express.Router();

const usuariosController = require("../controllers/usuariosControllers");
const animaisController = require("../controllers/animaisControllers");
const authentication = require("../middlewares/authMiddleware");

//fazer validators
router.get("/", authentication(["usuario", "admin"]), animaisController.getAll);
router.get("/:id", authentication(["usuario", "admin"]), animaisController.getAllByAnimalId);
router.delete("/:id", authentication(["usuario", "admin"]), animaisController.deleteAnimal);

module.exports = router;

