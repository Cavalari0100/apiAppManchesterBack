const Sintomas = require("../models/sintomas")

module.exports = app => {
    app.get('/listAllSintomas', (req,res) =>{
        Sintomas.listAll(res);
    })
    app.post('/creatNewSintoma', (req,res) =>{
        document = req.body
        Sintomas.insertOne(document,res)
    }) 

    
}