const db = require('../db/sqlite.js')

// Criar tarefa
exports.createTarefas = (req, res) => {
  const { nome_tarefa } = req.body

  if (!nome_tarefa) {
    return res.status(400).send({ error: 'Tarefa não pode ser vazia' })
  }

  db.run(
    `INSERT INTO tarefas (nome_tarefa, tarefa_concluida) VALUES (?, 0)`,
    [nome_tarefa],
    function (err) {
      if (err) {
        return res.status(500).send({ error: err.message })
      }

      res.status(201).send({
        id: this.lastID,
        nome_tarefa,
        tarefa_concluida: 0
      })
    }
  )
}

// Listar tarefas
exports.listTarefas = (req, res) => {
  db.all(
    `SELECT * FROM tarefas ORDER BY created_at DESC`,
    (err, rows) => {
      if (err) {
        return res.status(500).send({ error: err.message })
      }
      res.json(rows)
    }
  )
}

// Atualizar status da tarefa
exports.updateTarefas = (req, res) => {
  const { id } = req.params
  const { tarefa_concluida } = req.body

  if (tarefa_concluida !== 0 && tarefa_concluida !== 1) {
    return res.status(400).json({ error: 'Status inválido' })
  }

  db.run(
    `UPDATE tarefas SET tarefa_concluida = ? WHERE id = ?`,
    [tarefa_concluida, id],
    function (err) {
      if (err) {
        return res.status(500).json({ error: err.message })
      }

      res.json({ success: true })
    }
  )
}


exports.deleteTarefas = (req,res) => {
  const{id} = req.params



  db.run(`
    DELETE FROM tarefas WHERE id= ? `,
  [id],
  function(err) {
    if(err) {
      return res.status(500).json({message: err.message})
    }

    if(this.changes === 0) {
      return res.status(404).json({message: 'Tarefa não encontrada'})
    }
    return res.status(200).json({message: 'Tarefa deletada com sucesso!'})
  }
)
}