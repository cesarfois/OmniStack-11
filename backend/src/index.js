const express = require('express')
const cors = require('cors')
const routes = require('./routes')


const app = express()       // armazendo tudo o conteudo de express na variavel app

app.use(cors())      // limita que front pode consumir origin: 'http:// meuapp.com'
app.use(express.json())     // converte todo json em objeto
app.use(routes)             // aplica as rotas



app.listen(3333)