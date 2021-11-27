const Sintomas = require("../models/sintomas")

module.exports = app => {

    app.get('/sintomas', async (req, res) => {
        const response = await Sintomas.find();
        res.status(200).send(response);
    })
    app.post('/creatNewSintomas', (req, res) => {
        document = req.body
        Sintomas.insertOne(document, res)
    })
    app.put('/UpdateSintomas/:id', async (req, res) => {
        const id = req.params.id;
        const response = await Sintomas.updateOne(id, req.body)
        res.status(response.status).send(response.response);
    })
    app.delete('/sintomas/:id', async (req, res) => {
        id = req.params.id;
        Sintomas.deleteOne(id, res);
    })


}