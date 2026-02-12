import type { Chamado } from "../types/Chamado";

interface Props {
  chamados: Chamado[];
  onDelete: (id: number) => void;
}

export function ChamadoList({ chamados, onDelete }: Props) {
  return (
    <>
      {chamados.map((chamado) => (
        <div key={chamado.id}>
          <h3>{chamado.titulo}</h3>
          <p>{chamado.descricao}</p>
          <strong>Status: {chamado.status}</strong>
          <br />
          <button onClick={() => onDelete(chamado.id)}>
            Excluir
          </button>
          <hr />
        </div>
      ))}
    </>
  );
}
