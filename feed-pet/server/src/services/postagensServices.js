const createError = require("http-errors");
const { Usuario, Postagem } = require("../models");

async function createPostagem(id, postagem) {
    console.log(id)
    const usuario = await Usuario.findOne({ where: { id:id } });
    console.log(usuario)
    if (!usuario) throw createError(404, "Usuário não encontrado!");    

    const { titulo, conteudo } = postagem;
    
    const postagemCriada = await Postagem.create({
        user_id:id,titulo,conteudo
    })

    return postagemCriada;
}

async function getPostagem() {    
    let postagens = await Postagem.findAll(
        {
            include:{
                model:Usuario,
                as:'usuario'
            }
        }
    );    
    return postagens
}

async function acharUsuarioPostagem(id) {
    const postagem = await Postagem.findOne({ where: { id:id } })
    if (!postagem) throw createError(404, "Postagem não encontrada!");
    const donoPostagem = await Usuario.findOne({ where: { id:postagem.user_id } });
    if (!postagem) throw createError(404, "Dono da postagem não encontrado!");
    return await donoPostagem;
}

module.exports = {
    createPostagem,
    getPostagem,
    acharUsuarioPostagem
}
