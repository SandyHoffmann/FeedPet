const router = require("express").Router();
const authControllers = require("../controllers/refreshTokensControllers");

router.post("/login", authControllers.login);
router.post("/refreshToken", authControllers.refresh);

module.exports = router;