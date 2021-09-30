const moment = require("../node_modules/moment")
const conexao = require('../infraestrutura/conexao')
const {MongoCliente,ObjectId} = require("mongodb")
const conecta = conexao.db("appMAnchester").collection("sintomas")
var mongooseConection = require("../infraestrutura/conexaoMongoose")
const {Error} = require("mongoose")
const sintomas = require("../mongoose/sintomas")

class Sintomas {
    async listAll(){
        let result = null;
        try{
            result = await conecta.find().toArray()
        }catch(e){
            console.log(e);
        }
        finally{
            return result;
        }
    }
    async insertOne(document,res){
        const doc = new sintomas(document)
        try{
            await doc.save(function (error , result){
                if(error){
                    res.status("400").send(error)
                }else{
                    res.status("200").send(result)
                }
            })
        }
        catch(e){
            console.log(e)
        }
    }

}
module.exports = new Sintomas