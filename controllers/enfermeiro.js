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
    app.put('/enfermeiro/:id', async (req,res) => {
        const id = req.params.id;
        const response = await Enfermeiros.updateOne(id,req.body)
        res.status(response.status).send(response.response);
    })
    app.delete('/enfermeiro/:id', async (req,res) => {
        id = req.params.id;
        Enfermeiros.deleteOne(id,res);
    })

    
}