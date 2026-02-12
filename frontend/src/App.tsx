import { useEffect, useState } from "react";
import type { Chamado } from "./types/Chamado";
import {
  listarChamados,
  deletarChamado,
} from "./services/chamadoService";
import { ChamadoForm } from "./components/ChamadoForm";
import { ChamadoList } from "./components/ChamadoList";

function App() {
  const [chamados, setChamados] = useState<Chamado[]>([]);

  const carregarChamados = async () => {
    const data = await listarChamados();
    setChamados(data);
  };

  useEffect(() => {
    carregarChamados();
  }, []);

  const handleDelete = async (id: number) => {
    await deletarChamado(id);
    setChamados((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sistema de Chamados TI</h1>

      <ChamadoForm onCriado={carregarChamados} />

      <hr />

      <ChamadoList chamados={chamados} onDelete={handleDelete} />
    </div>
  );
}

export default App;
