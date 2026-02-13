import { Request, Response } from "express";
import Chamado from "../models/Chamado";

export const listarChamados = async (req: Request, res: Response) => {
  try {
    const chamados = await Chamado.findAll();
    res.json(chamados);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar chamados" });
  }
};

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

export const atualizarChamado = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { titulo, descricao, status } = req.body;

    const chamado = await Chamado.findByPk(id);

    if (!chamado) {
      return res.status(404).json({ error: "Chamado não encontrado" });
    }

    await chamado.update({ titulo, descricao, status });

    res.json(chamado);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar chamado" });
  }
};

export const deletarChamado = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const chamado = await Chamado.findByPk(id);

    if (!chamado) {
      return res.status(404).json({ error: "Chamado não encontrado" });
    }

    await chamado.destroy();

    res.json({ message: "Chamado deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar chamado" });
  }
};
