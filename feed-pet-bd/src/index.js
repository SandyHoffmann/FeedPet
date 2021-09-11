const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const usuario = require("./models/usuario");
const { Usuario } = require("./models");

// const db = require(".db/models");

require("dotenv").config;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Ola a");
});

app.post("/usuario", async (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        const [cliente, created] = await Usuario.findOrCreate({
            where: {
                email
            },
            defaults: {
                nome,
                senha
            }
        });
        if (!created) {
            res.status(409).json({ message: "Email já esta sendo usado! " });
        }
        res.status(201).json(cliente);
    } catch (err) {
        console.log(err.message);
        res.status(400).json({ message: "Falhou!" });
    }
});

app.listen(PORT, () => console.log(`Servidor rodando em: http://localhost:${PORT}`))