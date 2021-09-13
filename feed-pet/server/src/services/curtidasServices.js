const createError = require("http-errors");
const { Usuario, Postagem, Curtida } = require("../models");

async function createCurtida(id_usuario, id_postagem, curtida) {
    const postagem = await Postagem.findOne({ where: { id:id_postagem } });
    if (!postagem) throw createError(404, "Postagem não encontrada!");    

    const usuario = await Usuario.findOne({ where: { id:id_usuario } });
    if (!usuario) throw createError(404, "Usuário não encontrado!");    

    const { tipo } = curtida;
    
    const [curtidaCriada, created] = await Curtida.findOrCreate({
        where:{
            post_id:id_postagem,
            user_id:id_usuario
        },
        defaults: {
            tipo
        }
    })

    if (created) {
        return curtidaCriada
    }
    
    await curtidaCriada.destroy();

    return "Curtida Apagada"
}

async function getCurtida(id_postagem) {
    const postagem = await Postagem.findOne({ where: { id:id_postagem } });
    if (!postagem) throw createError(404, "Postagem não encontrada!");    

    const curtidas = await Curtida.findAll({where:{post_id:id_postagem}});    

    return curtidas

}

// async function acharComentariosPost(id_postagem) {
//     const postagem = await Postagem.findOne({ where: { id:id_postagem } });
//     if (!postagem) throw createError(404, "Postagem não encontrada!"); 
//     const comentarios = await Comentario.findAll({ where: { post_id:id_postagem } });
//     return comentarios;
// }

module.exports = {
    createCurtida,
    getCurtida
}