import { Schema,model } from "mongoose";

const PacientesSchema = Schema({
    nombre:{
        type:String
    },
    cargo:{
        type: String
    },
    fechaContratacion:{
        type: Date
    }
})
const Paciente= model('Paciente',PacientesSchema)
export default  Paciente