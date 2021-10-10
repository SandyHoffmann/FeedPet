const { Usuario } = require("./src/models");

(async () => {
    let { nome, email, senha } = require('minimist')(process.argv.slice(2));
    
    senha = senha.toString();

    try {
        await Usuario.create({ nome, email, senha, cargo: "admin" });

        console.log(`Admin com o email: ${email} e senha: ${senha} foi criado`);
    } catch (error) {
        console.log("Unable to cresate admin user");
        console.log(error);
    }
})();

// criar admin: node .\generateAdmin.js --nome=admin --email=admin2@admin --senha=admin