const express = require("express");
const router = express.Router();

const enderecosController = require("../controllers/enderecosControllers");

router.get("/", enderecosController.getEndereco);

module.exports = router;