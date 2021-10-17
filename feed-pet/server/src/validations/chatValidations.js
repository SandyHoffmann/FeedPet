const { body, validationResult } = require("express-validator");

module.exports = {
    post: [
        body("conteudo")
            .isLength({ min: 1, max: 40 })
            .withMessage(`Mensagem com comprimento Invalido - min: 1, max: 40`),
        body().custom(body => {
                const keys = ['conteudo'];
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
    ],
    postChat: [
        body("nome")
            .isLength({ min: 1, max: 20 })
            .withMessage(`Nome de chat com comprimento Invalido - min: 1, max: 20`),
        body().custom(body => {
                const keys = ['nome','descricao','usuarios'];
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