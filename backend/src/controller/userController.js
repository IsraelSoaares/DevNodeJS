const db = require('../db/sqlite.js')


exports.criarUsuarios = (req,res) => {
    const{nome_usuario, senha} = req.body

    if(!nome_usuario || !senha) {
        return res.status(400).send("Usuario ou senha vazios!")
    }

    
  db.run(
    `INSERT INTO users (nome_usuario, senha) VALUES (?, ?)`,
    [nome_usuario, senha],
    function (err) {
      if (err) {
        return res.status(500).json({ message: err.message })
      }

      return res.status(201).json({
        id: this.lastID,
        nome_usuario
      })
    }
  )
}



