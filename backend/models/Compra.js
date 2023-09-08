import { Schema,model } from "mongoose";

const compraSchema = Schema({
    fechaCompra: Date,
    proveedor: {
        nombre: String,
        contacto: String
    },
    medicamentosComprados: [{
        nombreMedicamento: String,
        cantidadComprada: Number,
        precioCompra: Number
    }]
});

const Compra = model('Compra',compraSchema)

export default Compra
