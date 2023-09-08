import { Schema,model } from "mongoose";

const VentasSchema = Schema({
    fechaVenta:{
        type:Date
    },
    paciente:{
        bombre:String,
        direccion: String
    },
    empleado:{
        nombre: String
    },
    fechaExpiracion:{
        type: Date
    },
    medicamentosVendidos:{
        type:Array,
        nombreMedicamento:String,
        cantidadVendida:Number,
        precio: Number
    }
})
const Medicamento= model('Ventas',VentasSchema)
export default  Medicamento