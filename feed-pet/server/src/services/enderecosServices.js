const createError = require("http-errors");
const { Usuario, Endereco } = require("../models");


async function defineEndereco(id_usuario, endereco) {
    const usuario = await Usuario.findOne({ where: { id:id_usuario } });
    if (!usuario) throw createError(404, "Usuario não encontrado!");    

    const { rua, bairro, cidade, estado } = endereco;
    
    const [enderecoCriado, created] = await Endereco.findOrCreate({
        where:{
            rua,
            bairro,
            cidade,
            estado
        }
    })

    usuario.endereco_id=enderecoCriado.id
    usuario.save()

    return { enderecoCriado }

}

async function getEndereco() {    
    return await Endereco.findAll();    
}

module.exports = {
    defineEndereco,
    getEndereco
}
