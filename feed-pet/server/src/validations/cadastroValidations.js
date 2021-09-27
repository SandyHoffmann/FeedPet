const { body, validationResult } = require("express-validator");

module.exports = {
    post: [
        body("nome")
            .isLength({ min: 4, max: 20 })
            .withMessage(`Nome com comprimento Invalido - min: 4, max: 20`),
        body("email")
            .isLength({ min: 10, max: 40 })
            .isEmail()
            .withMessage("Email Invalido"),
        body("senha")
            .isLength({ min: 6, max: 20 })
            .withMessage("Senha Invalida - min: 6, max: 20"),
        body("avatar")
            .custom(body => {(value => {
            console.log(value)
        })
            const keys = ['nome', 'email','senha','avatar'];
            return Object.keys(body).every(key => keys.includes(key));
        }).withMessage('Parâmetros extras enviados'),
        (req, res, next) => {
            const errors = validationResult(req);
            console.log(errors)
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            next();
        }
    ]
}