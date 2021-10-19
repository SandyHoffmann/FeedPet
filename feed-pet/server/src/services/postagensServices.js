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
async function deletePost(id_user,id_post) {
    const postagem = await Postagem.findOne({ where: { id:id_post } });
    if (!postagem) throw createError(404, "Postagem não encontrada!");    
    if (postagem.user_id == id_user){
        await postagem.destroy();
        return "deu bom"
    } else{
        throw createError(403, "Não permitido deletar post de outro usuário!"); 
    }

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
async function getPostagemEspecifica(id){
    let postagens = await Postagem.findAll(
        {
            where: {
                user_id : id
            },
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

async function deletePost(id) {
    return await Postagem.destroy({
        where: { id:id} 
      });
}

module.exports = {
    createPostagem,
    getPostagem,
    acharUsuarioPostagem,
    deletePost,
    getPostagemEspecifica
}
