import { Request, Response } from "express";
import Chamado from "../models/Chamado";

export const criarChamado = async (req: Request, res: Response) => {
  try {
    const { titulo, descricao } = req.body;

    const novoChamado = await Chamado.create({
      titulo,
      descricao,
    });

    res.status(201).json(novoChamado);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar chamado" });
  }
};

export const listarChamados = async (req: Request, res: Response) => {
  try {
    const chamados = await Chamado.findAll();
    res.json(chamados);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar chamados" });
  }
};
