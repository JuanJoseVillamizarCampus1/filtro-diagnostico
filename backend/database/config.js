import mongoose from "mongoose";

//Conexion con base de datos con variables de entorno y mongoose options para url y topologiaunificada para evitar errores 
const dBconnection = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('DB CONTECTADA');
    } catch (error) {
        console.log(error);
        throw new  Error('Error al conectar la databae')
    }
   
}
export default dBconnection;