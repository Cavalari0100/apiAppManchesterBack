const Pacientes = require("../models/pacientes")

module.exports = app => {
    app.get('/listAllPacientes', (req,res) =>{
        Pacientes.listAll().then(result => {res.status(200).send(result)})
        .catch(err =>{res.status(400).send(err)})
    })
    app.post('/creatNewPaciente', (req,res) =>{
        document = req.body
        Pacientes.insertOne(document,res)
    }) 

    
}