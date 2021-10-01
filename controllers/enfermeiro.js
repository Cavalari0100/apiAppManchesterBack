const Pacientes = require("../models/enfermeiro")

module.exports = app => {
    app.get('/listAllEnfermeiro', (req,res) =>{
        Pacientes.listAll(res)
    })
    app.post('/creatNewEnfermeiro', (req,res) =>{
        document = req.body
        Pacientes.insertOne(document,res)
    }) 

    
}