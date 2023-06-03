const mongoose = require('mongoose');

const assinantesSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    sobrenome: String,
    nascimento: String, 
    telefone: String,
    endereço: String,
    cidade: String,
    estado: String,
    imagemPerfil: String,
    status: Boolean
});

module.exports = mongoose.model('assinantes', assinantesSchema);
