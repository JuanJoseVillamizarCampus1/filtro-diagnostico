import dotenv from 'dotenv'
import Server from './models/Server.js'

//Para tener acceso a las variables de entorno
dotenv.config()
//Instanciamos la clase Server y la llamamos en el metodo listen
const server = new Server()
server.listen()