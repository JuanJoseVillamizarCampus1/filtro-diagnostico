import { Router } from "express";
import { getMedicamentos,getProvedoresMed,getCompraProvedorA } from "../controllers/medicamentos.js";
const router = Router()

const medicamentos= router.get('/',getMedicamentos)
const provedores= router.get('/prov',getProvedoresMed)
const provedorA = router.get('/proA',getCompraProvedorA)

export {
    medicamentos,
    provedores,
    provedorA
} 