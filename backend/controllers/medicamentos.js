import {response} from 'express';
import Medicamento from '../models/Medicamentos.js';


//Datos del provedor 
const getProvedoresMed = async (req, res = response) => {
    try {
        const medicamentos = await Medicamento.distinct("proveedor");
        res.json(medicamentos);
    } catch (error) {
        console.log(error);
    }
}

//Medicamento con menos de 50 unidades
const getMedicamentos = async(req, res=response)=>{
    try {
        const medicamentos= await Medicamento.find({stock:{$lt:50}})
        res.json(medicamentos)
    } catch (error) {
        console.log(error);
    }
}
//Medicamentos comprados al ‘Proveedor A’
const getCompraProvedorA = async(req,res=response)=>{
    try {
        const provedorA = "ProveedorA"
        const medicamentos= await Medicamento.find({"proveedor.nombre":provedorA})
        res.json(medicamentos)
    } catch (error) {
        
    }
}


export {
    getMedicamentos,getProvedoresMed,getCompraProvedorA
}