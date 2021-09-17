const express = require("express");
const app = express();
const cors = require('cors');
const morgan = require('morgan');

// const usuario = require("./models/usuario");
// const { Usuario, Animal, Endereco, Atividade, Postagem, Comentario, Curtida } = require("./models");

// const db = require(".db/models");

const usuariosRoutes = require("./routes/usuariosRoutes");
const animaisRoutes = require("./routes/animaisRoutes");
const postagensRoutes = require("./routes/postagensRoutes");
const enderecosRoutes = require("./routes/enderecoRoutes");
const agendasRoutes = require("./routes/agendasRoutes");
const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || 3000;

require("dotenv").config();
app.use(cors())
app.use(morgan())

app.use(express.json());

app.use("/usuarios", usuariosRoutes);
app.use("/animais", animaisRoutes);
app.use("/postagens", postagensRoutes);
app.use("/enderecos", enderecosRoutes);
app.use("/agendas", agendasRoutes);
app.use("/auth", authRoutes);



app.get("/", (req, res) => {
    res.send("Ola a");
});


app.listen(PORT, () => console.log(`Servidor rodando em: http://localhost:${PORT}`))