const express = require('express')
const cors = require('cors')

// Constants
const PORT = 8080
const HOST = '0.0.0.0'

// App
const app = express();

app.use(
  cors({
    origin: true,
    credentials: false,
    exposedHeaders: ['X-Total-Count', 'Link']
  })
)

app.get('/', (req, res) => {
  res.send('Hello world！！\n')
});

app.get('/ping', (req, res) => {
  res.send('This is response from Kaniko service 1')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
