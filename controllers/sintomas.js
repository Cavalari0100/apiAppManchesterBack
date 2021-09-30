const Sintomas = require("../models/sintomas")

module.exports = app => {
    app.get('/listAllSintomas', (req,res) =>{
        Sintomas.listAll().then(result => {res.status(200).send(result)})
        .catch(err =>{res.status(400).send(err)})
    })
    app.post('/creatNewSintoma', (req,res) =>{
        document = req.body
        Sintomas.insertOne(document,res)
    }) 

    
}