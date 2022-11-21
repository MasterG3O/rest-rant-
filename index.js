require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})
app.get('*', (req, res) => {
    res.status(`<h1> 404 PAGE <h1>`)
})

app.listen(process.env.PORT)
