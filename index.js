const express = require('express')
const app = express()
const port = 3000
const model = require('./models')
require('dotenv').config()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(3001, () => console.log(`Example app listening on port ${port}!`))