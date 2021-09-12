const createError = require("http-errors");
const { Usuario } = require("../models");

async function getUsuarios() {    
    return await Usuario.findAll();    
}

async function createUsuario(usuario) {
    const usuarioJaExiste = await Usuario.findOne({
        where: {
            email: usuario.email
        }
    });

    if (usuarioJaExiste) throw new createError(409, "Usuário já existe!");

    return await Usuario.create(usuario);
}


module.exports = {
    getUsuarios,
    createUsuario
}
