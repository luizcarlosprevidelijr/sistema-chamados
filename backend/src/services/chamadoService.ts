import { Chamado } from "../models/Chamado";

let chamados: Chamado[] = [
  {
    id: 1,
    titulo: "Computador não liga",
    descricao: "Máquina do setor financeiro não está ligando.",
    status: "aberto",
  },
];

export const getChamados = (): Chamado[] => {
  return chamados;
};

export const addChamado = (data: Omit<Chamado, "id">): Chamado => {
  const novoChamado: Chamado = {
    id: chamados.length + 1,
    ...data,
  };

  chamados.push(novoChamado);
  return novoChamado;
};

export const removeChamado = (id: number): void => {
  chamados = chamados.filter((c) => c.id !== id);
};

export const updateChamado = (
  id: number,
  data: Partial<Omit<Chamado, "id">>
): Chamado | null => {
  const index = chamados.findIndex((c) => c.id === id);

  if (index === -1) return null;

  chamados[index] = {
    ...chamados[index],
    ...data,
  };

  return chamados[index];
};
