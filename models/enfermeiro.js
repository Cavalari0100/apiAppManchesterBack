const moment = require("../node_modules/moment")
const conexao = require('../infraestrutura/conexao')
const { MongoCliente, ObjectId } = require("mongodb")
const conecta = conexao.db("appManchester").collection("enfermeiros")
var mongooseConection = require("../infraestrutura/conexaoMongoose")
const { Error } = require("mongoose")
const paciente = require("../mongoose/enfermeiros")

class Enfermeiros {
    async listAll(res) {
        let result = null
        try {
            result = await conecta.find().toArray()
        }
        catch (e) {
            console.log(e)
        }
        finally {
            res.status(200).send(result);
        }
    }
    async insertOne(document, res) {
        const doc = new paciente(document)
        try {
            await doc.save(function (error, result) {
                if (error) {
                    res.status("400").send(error)
                } else {
                    res.status("200").send(result)
                }
            })
        }
        catch (e) {
            console.log(e)
        }

    }
}
module.exports = new Enfermeiros