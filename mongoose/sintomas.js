const { ObjectId } = require("mongodb");
const mongoose = require("mongoose")

let sintomas = mongoose.Schema({
    alteracaoEstadoMental: {
        type:Boolean,
        required:[true,"alteracaoEstadoMental is required"]
    },
    altura:{
        type:String,
        required:[true,"altura is required"]
    },
    convulsao:{
        type:Boolean,
        required:[true,"convulsao is required"]
    },
    deficitiMotor:{
        type:Boolean,
        required:[true,"deficitiMotor is required"]
    },
    dorToracica:{
        type:Boolean,
        required:[true,"dorToracica is required"]
    },
    fc:{
        type:String,
        required:[true,"fc is required"]
    },
    glicemia:{
        type:String,
        required:[true,"glicemia is required"]
    },
    peso:{
        type:String,
        required:[true,"peso is required"]
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