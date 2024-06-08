import express from 'express'

const servidor = express()

servidor.get('/teste', (requisicao, resposta) => {
    return resposta.send('Meu primeiro servidor Node.js com Express')
})

servidor.listen(3000)
