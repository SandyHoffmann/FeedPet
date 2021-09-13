const createError = require("http-errors");
const { Agenda } = require("../models");

async function mostrarAgendas() {
    return await Agenda.findAll();    

}

module.exports = {
    mostrarAgendas
}