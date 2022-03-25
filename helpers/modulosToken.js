const jwt = require('jsonwebtoken');
//palavra chave para criar o token
const secret  = "my_secret"

module.exports = {
    async createUserToken (user, req, res){
        
        const token = jwt.sign({
            login: user.login,
            id: user.id
        }, secret)
        
        res.status(200).json({
            message: "token criado para o usuario",
            token : token,
            userId : user.id
        })
    },

    async getToken(req){

        const authHeader = req.headers.authorization
        const data = {authHeader, secret}
        return data

    }
}

