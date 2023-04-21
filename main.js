const express = require('express')
const {dbConnection} = require('./db/config')
const cors = require('cors')
const app = express()
app.use(cors())

const bodyparser = require('body-parser')
const {usuarioPost,usuarioGet,usuarioPut,usuarioDelete} = require('./controller/usuario')

dbConnection()
app.use(bodyparser.json())

app.get('/', usuarioGet)
app.post('/', usuarioPost)
app.put('/:id', usuarioPut)
app.delete('/:id', usuarioDelete)

app.listen(3000)