const fs = require('fs').promises;
const path = require('path');
async function ExcluirFoto(foto) {
    let caminho = path.join(`uploads/${foto}`)
    await fs.unlink(caminho);
}

module.exports = {ExcluirFoto}