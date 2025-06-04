import { Sequelize } from 'sequelize'
import dotenv from 'dotenv';
dotenv.config();


const database = new Sequelize(process.env.BANCO_DE_DADOS)

try {

    await database.authenticate()
    console.log ("Conectado")
} catch(erro) {
    console.log ("Desconectado")
}

export {database}
