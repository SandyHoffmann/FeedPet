const express = require("express");
const app = express();
// const usuario = require("./models/usuario");
// const { Usuario, Animal, Endereco, Atividade, Postagem, Comentario, Curtida } = require("./models");

// const db = require(".db/models");

const usuariosRoutes = require("./routes/usuariosRoutes");

const PORT = process.env.PORT || 3000;

require("dotenv").config;

app.use(express.json());

app.use("/usuarios", usuariosRoutes);

app.get("/", (req, res) => {
    res.send("Ola a");
});



app.listen(PORT, () => console.log(`Servidor rodando em: http://localhost:${PORT}`))