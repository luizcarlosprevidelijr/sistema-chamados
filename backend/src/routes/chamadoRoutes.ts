import { Router } from "express";
import {
  listarChamados,
  criarChamado,
} from "../controllers/chamadoController";

const router = Router();

router.get("/", listarChamados);
router.post("/", criarChamado);


export default router;
