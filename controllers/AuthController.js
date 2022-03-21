const User = require('../Models/User')
const bcrypt = require("bcrypt")
const validator = require('validator')

module.exports = class UserController {

    static async registerUserPost(req, res) {

        const {
            email,
            login,
            password,
            confirmpassword
        } = req.body

        //validando se o usuario ja existe no Banco de dados
        const checkIfEmailExists = await User.findOne({where: { email: email}})
        if(checkIfEmailExists){
            console.log(email)
            return res.status(422).json({message: 'Ja existe uma conta com esse email'})
        }

        //validando se o login ja está em uso
        const checkIfLoginExists = await User.findOne({where: {login: login}})
        if(checkIfLoginExists){
            return res.status(422).json({message: 'Ja existe uma conta com esse login'})
        }

        //diversas validações dos campos de cadastro
        if (!validator.isEmail(email)) {
            return res.status(422).json({ message: 'Insira um email válido.' })
        }
        if (!validator.isLength(login, { min: 4, max: 12 })) {
            return res.status(422).json({ message: `O login deve ter entre 4 a 12 caracteres` })
        }
        if (!validator.equals(password, confirmpassword)) {
            return res.status(422).json({ message: 'As senhas estão diferentes.' })
        }
        if (!validator.isLength(password, {min:4,max: 15})) {
            return res.status(422).json({ message: 'A senha deve conter entre 6 a 15 caracteres.' })
        }
        
        //criptografando a senha
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt)

        const user = {
            email,
            login,
            password: hashedPassword
        }
        try {
           await User.create(user)
           return res.status(200).json({ message: 'Usuario criado com sucesso'})
            
        } catch (error) {
            res.status(500).json({ message: 'Não foi possivel criar o usuario: ' + error})
            return
        }

        res.status(201).json({ user });
    }
}