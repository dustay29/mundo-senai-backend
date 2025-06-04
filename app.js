import express from 'express'
import 'dotenv/config'
import cors from 'cors' 
import { database } from './database/index.js'
import { router } from './rotas/rotas.js'
import { Tarefa } from './models/Tarefa.js'
import { Usuario } from './models/Usuario.js'

const app = express()

app.use(cors()) 
app.use(express.json())
app.use(router)

try {
    // await database.authenticate()
    // await database.sync({ alter: true })
    // await Tarefa.sync({ alter: true })
    // await Usuario.sync({ alter: true })

    console.log('Banco conectado e sincronizado')
} catch (e) {
    console.error('Erro na conexão com o banco', e)
}

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`))