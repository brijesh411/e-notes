const connectToMongo = require('./db');

const express = require('express')

connectToMongo();

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Brijesh!')
  })

app.get('/api/v1/login', (req, res) => {
  res.send('You have login!')
})

app.get('/api/v1/signup', (req, res) => {
    res.send('You have singup!')
  })

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})


