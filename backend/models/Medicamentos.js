import { Schema,model } from "mongoose";

const MedicamentoSchema = Schema({
    nombre:{
        type:String
    },
    precio:{
        type: Number
    },
    stock:{
        type: Number
    },
    fechaExpiracion:{
        type: Date
    },
    proveedor:{
    nombre:String,
    contacto: String
    }
})
const Medicamento= model('Medicamentos',MedicamentoSchema)
export default  Medicamento