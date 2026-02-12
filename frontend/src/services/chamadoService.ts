import type { Chamado } from "../types/Chamado";

const API_URL = "http://localhost:3001/chamados";

export const listarChamados = async (): Promise<Chamado[]> => {
  const response = await fetch(API_URL);
  return response.json();
};

export const criarChamado = async (
  chamado: Omit<Chamado, "id">
): Promise<void> => {
  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(chamado),
  });
};

export const deletarChamado = async (id: number): Promise<void> => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};
