const secret = require('../config/secret')
const jwt = require('jsonwebtoken');
const {findByEmail} = require('../models/enfermeiro')

class Login{
    async getToken(enf, res){
        const foundedEnf = await findByEmail(enf.email);
        if(!foundedEnf.data){
            res.status(400).send("Usuario nao encontrado")
            return
        }

        if(enf.password === foundedEnf.data.password){
            jwt.sign({coren: foundedEnf.data.coren, nomeEnfermeiro: foundedEnf.data.nome}, secret, { expiresIn: '1day' }, (err, token) => { // instead of user:user and token:token, ES6 if the same name can use only the word
                res.json({
                    token
                })
            });
        }else{
            res.status(403).send("senha incorreta")
        }
    }
}

module.exports = new Login()