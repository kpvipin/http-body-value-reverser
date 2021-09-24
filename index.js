const express = require('express')
const valueReverser = require('./value-reverser')
const app = express()
const port = 3000

app.use(express.json(), valueReverser());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  res.send(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
