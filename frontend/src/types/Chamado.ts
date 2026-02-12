export interface Chamado {
  id: number;
  titulo: string;
  descricao: string;
  status: "aberto" | "em andamento" | "finalizado";
}
