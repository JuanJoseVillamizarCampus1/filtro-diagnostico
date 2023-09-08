import { Schema,model } from "mongoose";

const PacientesSchema = Schema({
    nombre:{
        type:String
    },
    direccion:{
        type: String
    },
    telefono:{
        type: String
    }
})
const Paciente= model('Paciente',PacientesSchema)
export default  Paciente