const express = require("express");
const router = express.Router();

const usuariosController = require("../controllers/usuariosControllers");
const animaisController = require("../controllers/animaisControllers");
const authentication = require("../middlewares/authMiddleware");
const upload = require("../middlewares/multer")

//fazer validators
router.get("/", animaisController.getAll);
router.get("/geral/:id", animaisController.getEspecific);
router.get("/:id", animaisController.getAllByAnimalId);
router.delete("/:id", authentication(["usuario", "admin"]), animaisController.deleteAnimal);
router.put("/:id", upload.single('avatar'), authentication(["usuario", "admin"]), animaisController.editAnimal);

module.exports = router;

