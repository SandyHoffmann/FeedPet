const { body, validationResult } = require("express-validator");

module.exports = {
    post: [
        body("nome")
            .isLength({ min: 4, max: 40 })
            .withMessage(`Nome com comprimento Invalido - min: 4, max: 40`),
        body("email")
            .isLength({ min: 10, max: 40 })
            .withMessage("Comprimento Invalido")
            .isEmail()
            .withMessage("Email Invalido"),
        body("senha")
            .isLength({ min: 6, max: 20 })
            .withMessage("Senha Invalida - min: 6, max: 20"),
        body().custom(body => {
                const keys = ['nome', 'email','senha'];
                return Object.keys(body).every(key => keys.includes(key));
            }).withMessage('Parâmetros extras enviados'),
        (req, res, next) => {
            console.log(
                req.body
            )
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            next();
        }
    ]
}