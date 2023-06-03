require("./mongodb");
const mongoose = require("mongoose");
const assinantesModel = require("../models/assinantesModel");
const assinantes = require("./assinantes.json");

async function carregarDados() {
    try {
        await assinantesModel.deleteMany({});
        for (const assinante of assinantes) {
            await assinantesModel.create(assinantes);
        }
        console.log("Carga de assinantes feita!");
    } catch (err) {
        console.log(err);
    } finally {
        process.exit();
    }
}

carregarDados();