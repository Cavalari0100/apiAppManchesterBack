const Pacientes = require("../models/pacientes")


module.exports = app => {
    app.get('/paciente', async(req,res) => {
        const response = await Pacientes.find(); 
        res.status(200).send(response);
    })
    app.post('/creatNewPaciente', (req,res) =>{
        document = req.body
        Pacientes.insertOne(document,res)
    }) 
    app.put('/UpdatePaciente/:id', async (req,res) => {
        const id = req.params.id;
        const response = await Pacientes.updateOne(id,req.body)
        res.status(response.status).send(response.response);
    })
    app.delete('/paciente/:id', async (req,res) => {
        id = req.params.id;
        Pacientes.deleteOne(id,res);
    })

    
}