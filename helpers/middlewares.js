const modulosToken = require("./modulosToken")
const jwt = require('jsonwebtoken')

module.exports = {

    async checkToken(req, res, next) {

        if (!req.headers.authorization) {
            return res.status(401).json({
                message: 'Acesso negado'
            })
        }

        const token = await modulosToken.getToken(req)
        //verificando se existe o token
        if (!token) {
            return res.status(401).json({
                message: 'Acesso negado, token não recebido'
            })
        }
        //verificando se está correto e seguindo para a rota
        try {
            const verified = jwt.verify(token.authHeader, token.secret)
            req.user = verified
            next()            

        } catch (error) {
            console.log(error)
            return res.status(400).send({
                message: 'token invalido'
            })
        }
    }
}