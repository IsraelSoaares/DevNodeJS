const express = require('express')
const router = express.Router()

const {
  createTarefas,
  listTarefas,
  updateTarefas,
  deleteTarefas
} = require('../controller/tarefasController')



router.post('/tasks', createTarefas)
router.get('/tasks', listTarefas)
router.delete('/tasks/:id', deleteTarefas)
router.put('/tasks/:id', updateTarefas)

module.exports = router
