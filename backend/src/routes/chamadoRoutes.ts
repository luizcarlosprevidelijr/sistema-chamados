import { Router } from "express";
import {
  listarChamados,
  criarChamado,
  atualizarChamado,
  deletarChamado,
} from "../controllers/chamadoController";

const router = Router();

router.get("/", listarChamados);
router.post("/", criarChamado);
router.put("/:id", atualizarChamado);
router.delete("/:id", deletarChamado);

export default router;
