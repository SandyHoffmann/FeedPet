const createError = require("http-errors");
const { Usuario,Postagem, } = require("../models");

async function getUsuarios() {    
    return await Usuario.findAll();    
}

async function deleteUsuario(id) {
    return await Usuario.destroy({
        where: { id:id} 
      });
}

async function createUsuario(usuario) {
    const usuarioJaExiste = await Usuario.findOne({
        where: {
            email: usuario.email
        }
    });

    if (usuarioJaExiste) throw new createError(409, "Usuário já existe!");

    const usuarioCriado =  await Usuario.create(usuario);
    return usuarioCriado
}

async function acharAnimaisUsuario(id) {
    const usuario = await Usuario.findOne({ where: { id:id } });
    if (!usuario) throw createError(404, "Usuário não encontrado!");
    console.log(usuario)
    return await usuario.getAnimal();
}

async function acharPostagensUsuario(id) {
    const usuario = await Usuario.findOne({ where: { id:id } });
    if (!usuario) throw createError(404, "Usuário não encontrado!");
    console.log(usuario)
    const postagens = await Postagem.findAll({ where: { user_id:id } });
    return postagens;
}

module.exports = {
    getUsuarios,
    createUsuario,
    acharAnimaisUsuario,
    acharPostagensUsuario,
    deleteUsuario
}
