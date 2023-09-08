import { Schema,model } from "mongoose";

const ProvedoresSchema = Schema({
    nombre:{
        type:String
    },
    contacto:{
        type: String
    },
    direccion:{
        type: String
    }
})
const Proveedor= model('Proveedore',ProvedoresSchema)
export default  Proveedor