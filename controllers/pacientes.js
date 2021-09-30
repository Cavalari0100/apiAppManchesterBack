const Pacientes = require("../models/pacientes")

module.exports = app => {
    app.get('/listAllPacientes', (req,res) =>{
        Pacientes.listAll(res)
    })
    app.post('/creatNewPaciente', (req,res) =>{
        document = req.body
        Pacientes.insertOne(document,res)
    }) 

    
}