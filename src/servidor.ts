import express, { Request, Response } from 'express'

const servidor = express()

servidor.get('/teste', (requisicao:Request, resposta:Response) => {
    return resposta.send('Meu primeiro servidor Node.js com Express e Typescript')
})

servidor.listen(3000)
