const sqlite3 = require('sqlite3').verbose()
const path = require('path')

const dbPath = path.resolve(__dirname, 'database.db')

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao conectar no banco:', err.message)
  } else {
    console.log('Banco SQLite conectado')
  }
})

// ===== TABELA USERS =====
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_usuario TEXT NOT NULL,
    senha TEXT NOT NULL
  )
`)

// ===== TABELA TAREFAS (TODO) =====
db.run(`
  CREATE TABLE IF NOT EXISTS tarefas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_tarefa TEXT NOT NULL,
    tarefa_concluida INTEGER DEFAULT 0,
    user_id INTEGER 
  )
`)

module.exports = db
