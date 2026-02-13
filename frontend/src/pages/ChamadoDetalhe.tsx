import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Paper, Typography, Chip, Button, Stack } from "@mui/material";
import { listarChamados } from "../services/chamadoService";
import type { Chamado } from "../types/Chamado";

export default function ChamadoDetalhe() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [chamado, setChamado] = useState<Chamado | null>(null);

  useEffect(() => {
    async function carregar() {
      const chamados = await listarChamados();
      const encontrado = chamados.find(
        (c) => c.id === Number(id)
      );
      setChamado(encontrado || null);
    }

    carregar();
  }, [id]);

  if (!chamado) {
    return <Typography>Chamado não encontrado</Typography>;
  }

  return (
    <Paper sx={{ p: 4, maxWidth: 600 }}>
      <Stack spacing={2}>
        <Typography variant="h5">
          {chamado.titulo}
        </Typography>

        <Typography>
          {chamado.descricao}
        </Typography>

        <Chip
          label={chamado.status}
          color={
            chamado.status === "aberto"
              ? "warning"
              : chamado.status === "em andamento"
              ? "info"
              : "success"
          }
        />

        <Button
          variant="outlined"
          onClick={() => navigate("/")}
        >
          Voltar
        </Button>
      </Stack>
    </Paper>
  );
}
