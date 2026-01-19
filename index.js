const express = require('express')
const cors = require('cors')
const path = require('path')

const userRoutes = require('./backend/src/routes/userRoutes')
const tableRoutes = require('./backend/src/routes/tableRoutes')
const loginRoutes = require('./backend/src/routes/loginRoutes')

const app = express()

app.use(cors())
app.use(express.json())

// API
app.use('/api', userRoutes)
app.use('/api', tableRoutes)
app.use('/api', loginRoutes)

// Frontend
app.use(express.static(path.join(__dirname, 'frontend')))

app.listen(9090, () => {
  console.log('Servidor rodando em http://localhost:9090')
})
