const db = require("../db/sqlite")
const env = require("dotenv").config()
const jwt = require("jsonwebtoken")

exports.login = (req,res) => {
    const {nome_usuario, senha} = req.body

    

    if(!nome_usuario || !senha){
        return res.status(400).json({message: 'Usuario e senha obrigatórios'})
    }


    const sql = 

    `SELECT * FROM users
    WHERE nome_usuario = ?`


    db.get(sql, [nome_usuario], (err,user) => {
        if(err){
            return res.status(500).json({message: err.message})
        }

        if(!user){
            return res.status(401).json({message: 'Usuario ou senha invalidos'})
        }

        if(user.senha != senha){
            return res.status(401).json({message: 'Senha inválida'})
        }

        return res.status(200).json({
            message: 'Login realizado com sucesso',
            user: {
                id: user.id,
                nome_usuario: user.nome_usuario
            }
        })
    })
}


