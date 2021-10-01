const Enfermeiros = require("../models/enfermeiro")

module.exports = app => {
    app.get('/listAllEnfermeiro', (req,res) =>{
        Enfermeiros.listAll(res)
    })
    app.post('/creatNewEnfermeiro', (req,res) =>{
        document = req.body
        Enfermeiros.insertOne(document,res)
    }) 
    app.post('/loginEnfermeiro',(req,res)=>{
        document = req.body
        Enfermeiros.validationLogin(document,res);

    })

    
}