const Login = require('../models/login')

module.exports = app => {
    app.post('/login', (req,res) => {
        Login.getToken(req.body,res)
    })
}