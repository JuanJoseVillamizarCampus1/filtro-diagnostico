import express from 'express';
import cors from 'cors';
import dBconnection from '../database/config.js';
import {medicamentos,provedores,provedorA} from '../routes/medicamentos.routes.js'


//Se crea la clase del servidor que contiene el llamado al puerto por una variable de entorno, se usa expreess y el path para enrutar
class Server{
    //Se inicializan algunos metodos en el constructor y el path de enrutamiento
    constructor(){
        this.app= express()
        this.port = process.env.PORT
        this.middlewares()
        this.connectionDB();
        this.path={
            medicamentos: '/api/medicamentos',
            provedoresMedicamentos: '/api/medicamentos/provedores',
            provedorA :'/api/provedorA'
        }
        this.routes();

        }

    //Declaramos connectionDB como la conexion con la base de datos de manera asincrona
    async connectionDB(){
        await dBconnection()
    }
    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
    }
    routes(){
        this.app.use(this.path.medicamentos,medicamentos)
        this.app.use(this.path.provedoresMedicamentos,provedores)
        this.app.use(this.path.provedorA,provedorA)
    }
    //Creamos la funcion por la cual nuestro servidor va a escuchar en el puerto asignado (8001)
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`EL servidor esta corriendo en el puerto ${this.port}`);
        })
    }
}

//Exportamos SERVER para uzarlo en app.js

export default Server;


