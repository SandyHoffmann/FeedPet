const createError = require("http-errors");
const { Usuario, Postagem, Comentario } = require("../models");

async function createComentario(id_usuario, id_postagem, comentario) {
    const postagem = await Postagem.findOne({ where: { id:id_postagem } });
    if (!postagem) throw createError(404, "Postagem não encontrada!");    

    const usuario = await Usuario.findOne({ where: { id:id_usuario } });
    if (!usuario) throw createError(404, "Usuário não encontrado!");    

    const { conteudo } = comentario;
    
    const comentarioCriado = await Comentario.create({
        conteudo,user_id:id_usuario,post_id:id_postagem
    })

    return comentarioCriado;
}

async function acharComentariosPost(id_postagem) {
    const postagem = await Postagem.findOne({ where: { id:id_postagem } });
    if (!postagem) throw createError(404, "Postagem não encontrada!"); 
    const comentarios = await Comentario.findAll({ where: { post_id:id_postagem },
        include:{
            model:Usuario,
            as:'usuario'
        }});
    return comentarios;
}

async function deleteComent(id) {
    return await Comentario.destroy({
        where: { id:id} 
      });
}


module.exports = {
    createComentario,
    acharComentariosPost,
    deleteComent
}