const { ObjectId } = require("mongodb");
const mongoose = require("mongoose")

let pacientes = mongoose.Schema({
    nome: {
        type: String,
        required: [true, "name is required"]
    },
    cpf: {
        type: String,
        required:[true,"cpf is required"]
    },
    rg: {
        type: String,
        rg:[true,"rg is required"]
    },
    email: {
        type: String
    },
    endereco: {
        type: String,
        required:[true,"endereco is required"]
    },
    numeroResidencia: {
        type: String,
        required:[true,"numero da residencia is required"]
    },
    cidade: {
        type: String,
        required:[true,"cidade is required"]
    },
    estado: {
        type: String,
        required:[true,"estado is required"]
    },
    cep: {
        type: String,
        required:[true,"cep is required"]
    },
    telefone: {
        type: String
    },
    convenio: {
        type: String,
        enum:["sim","nao"]
    },
},
    {
        timestamps: true
    }

)
module.exports = mongoose.model("Pacientes", pacientes, 'pacientes');
