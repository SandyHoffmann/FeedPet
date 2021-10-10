const router = require("express").Router();
const authControllers = require("../controllers/refreshTokensControllers");

const loginValidations = require("../validations/loginValidations");

router.post("/login", authControllers.login);
router.post("/login-google", authControllers.loginGoogle);
router.post("/refreshToken", authControllers.refresh);

module.exports = router;