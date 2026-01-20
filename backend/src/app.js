const express = require('express')
const app = express()

app.use(express.json())

app.use('/register', require('./routes/userRoutes'))
app.use('/tasks', require('./routes/tableRoutes'))
app.use('/login', require('./routes/loginRoutes'))

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' })
})

module.exports = app
