const { ObjectId } = require("mongodb");
const mongoose = require("mongoose")

let enfermeiros = mongoose.Schema({
    nome: {
        type: String,
        required: [true, "name is required"]
    },
    email: {
        type: String,
        required:[true, "email is required"]
    },
    password:{
        type: String,
        required:[true,"password is required"]
    },
    cpf:{
        type:String,
        required:[true,"cpf is required"]
    },
    rg:{
        type:String,
        required:[true,"rg is required"]
    },
    coren:{
        type:String,
        required:[true,"coren is required"]
    },

},
    {
        timestamps: true
    }
)
module.exports = mongoose.model("Enfermeiros", enfermeiros, 'enfermeiros');