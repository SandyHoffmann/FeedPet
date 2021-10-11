const { body, validationResult } = require("express-validator");

module.exports = {
    post: [
        body("titulo")
            .isLength({ min: 4, max: 20 })
            .withMessage("Titulo com comprimento Invalido"),
        body("conteudo")
            .isLength({ min: 10, max: 40 })
            .withMessage("Titulo com comprimento Invalido"),
        body().custom(body => {
            const keys = ['titulo', 'conteudo'];
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
    ],
    // fazer ainda
    delete: [
        body("nome")
            .isLength({ min: 4 })
            .withMessage("Nome inválido"),
        body().custom(body => {
            const keys = ['nome'];
            return Object.keys(body).every(key => keys.includes(key));
        }).withMessage('Parâmetros extras enviados'),
        (req, res, next) => {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            next();
        }
    ]
}