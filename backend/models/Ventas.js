import { Schema,model } from "mongoose";

const ventaSchema = Schema({
    fechaVenta: Date,
    paciente: {
        nombre: String,
        direccion: String
    },
    empleado: {
        nombre: String,
        cargo: String
    },
    medicamentosVendidos: [{
        nombreMedicamento: String,
        cantidadVendida: Number,
        precio: Number
    }]
});
const Venta = model('Venta', ventaSchema);
export default Venta
