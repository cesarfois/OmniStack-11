const express = require('express')

const app = express()       // armazendo tudo o conteudo de express na variavel app


app.get('/1', (request, response) => {    // rota
    return response.send('Hello World')
})

app.get("/", (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'César J. Fois'
    })
})

app.listen(3333)