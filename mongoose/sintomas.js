const { ObjectId } = require("mongodb");
const mongoose = require("mongoose")

let sintomas = mongoose.Schema({
    fc:{
        type:String,
        required:[true,"fc is required"]
    },
    glicemia:{
        type:String,
        required:[true,"glicemia is required"]
    },
    pressao:{
        type:String,
        require:[true,"pressao is required"]
    },
    temperatura:{
        type:String,
        required:[true,"temperatura is required"]
    },
},
    {
        timestamps: true
    }
)
module.exports = mongoose.model("Sintomas", sintomas, 'sintomas');