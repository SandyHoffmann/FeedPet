// const { body, validationResult } = require("express-validator");

// module.exports = {
//     post: [
//         body("email")
//             .isLength({ min: 10, max: 40 })
//             .withMessage("Comprimento Invalido")
//             .isEmail()
//             .withMessage("Email Invalido"),
//         body("senha")
//             .isLength({ min: 6, max: 20 })
//             .withMessage("Senha Invalida"),
//         body.custom(body => {
//             const keys = ['nome', 'email','senha'];
//             return Object.keys(body).every(key => keys.includes(key));
//         }).withMessage('Parâmetros extras enviados'),
//         (req, res, next) => {
//             const errors = validationResult(req);
//             console.log(errors)
//             if (!errors.isEmpty()) {
//                 return res.status(400).json({ errors: errors.array() });
//             }
//             next();
//         }
//     ]
// }