const express = require('express')
const cors = require('cors')
const path = require('path')
const client = require('prom-client')

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

app.get("/", (req, res) => {
  res.status(200).send("NGINX → NODE OK");
});


// Crie métricas
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ timeout: 5000 });

app.get('/metrics', async (req, res) => {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
});


app.use((req, res, next) => {
  httpRequestsTotal.inc({ method: req.method, endpoint: req.path });
  next();
});

app.listen(9090, "0.0.0.0",  () => {
  console.log('Servidor rodando em http://localhost:9090')
})
