const User = require('../Models/User')
const bcrypt = require("bcrypt")
const validator = require('validator')
const modulosToken = require('../helpers/modulosToken')

module.exports = class UserController {

    static async registerUserPost(req, res) {

        const {
            email,
            login,
            password,
            confirmpassword
        } = req.body

        //validando se o usuario ja existe no Banco de dados
        const checkIfEmailExists = await User.findOne({
            where: {
                email: email
            }
        })
        if (checkIfEmailExists) {
            return res.status(422).json({
                message: 'Ja existe uma conta com esse email'
            })
        }

        //validando se o login ja está em uso
        const checkIfLoginExists = await User.findOne({
            where: {
                login: login
            }
        })
        if (checkIfLoginExists) {
            return res.status(422).json({
                message: 'Ja existe uma conta com esse login'
            })
        }

        //diversas validações dos campos de cadastro
        if (!validator.isEmail(email)) {
            return res.status(422).json({
                message: 'Insira um email válido.'
            })
        }
        if (!validator.isLength(login, {
                min: 4,
                max: 12
            })) {
            return res.status(422).json({
                message: `O login deve ter entre 4 a 12 caracteres`
            })
        }
        if (!validator.equals(password, confirmpassword)) {
            return res.status(422).json({
                message: 'As senhas estão diferentes.'
            })
        }
        if (!validator.isLength(password, {
                min: 6,
                max: 15
            })) {
            return res.status(422).json({
                message: 'A senha deve conter entre 6 a 15 caracteres.'
            })
        }

        //criptografando a senha
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)

        const user = {
            email,
            login,
            password: hashedPassword
        }
        //tentando inserir o objeto no banco de dados.
        try {
            await User.create(user)
            
            await modulosToken.createUserToken(user , req , res)

        } catch (error) {
            res.status(500).json({
                message: 'Não foi possivel criar o usuario: ' + error
            })
            return
        }
    }

    static async loginPost(req, res) {

        const {
            login,
            password
        } = req.body
        
        //procurar no banco de dados se o usuario existe
        const user = await User.findOne({
            where: {
                login: login,
            }
        })
        
        //se ele nao existir enviar uma mensagem de erro de login ou senha
        if (!user) {
            return res.status(422).json({
                message: 'Usuario ou senha invalido'
            })
        }
        
        //verificando se o password bate com o hash no banco de dados
        const passwordMatch = bcrypt.compareSync(password, user.password)
        
        //se existir o usuario e a senha bater com o BD, logar com o usuario
        if (passwordMatch) {
            console.log('logado com sucesso.')
            return await modulosToken.createUserToken(user , req , res)
           
        } else {
            //console.log(user , login)
            return res.status(422).json({
                message: 'Usuario ou senha invalido'
            })
        }
    }

}