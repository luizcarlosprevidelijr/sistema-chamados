import { useState } from "react";
import type { Chamado } from "../types/Chamado";

interface Props {
  onCriado: () => void;
}

export function ChamadoForm({ onCriado }: Props) {
 const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] = useState<Chamado["status"]>("aberto");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("http://localhost:3001/chamados", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ titulo, descricao, status }),
    });

    setTitulo("");
    setDescricao("");
    setStatus("aberto");

    onCriado();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />

      <textarea
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        required
      />

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value as Chamado["status"])
        }
      >
        <option value="aberto">Aberto</option>
        <option value="em andamento">Em andamento</option>
        <option value="finalizado">Finalizado</option>
      </select>

      <button type="submit">Criar</button>
    </form>
  );
}
