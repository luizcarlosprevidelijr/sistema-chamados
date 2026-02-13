import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listarChamados } from "../services/chamadoService";
import type { Chamado } from "../types/Chamado";

import {
  Grid,
  Paper,
  Typography,
  Button,
  Stack
} from "@mui/material";


export default function Dashboard() {
  const [chamados, setChamados] = useState<Chamado[]>([]);
  const navigate = useNavigate();

  const carregarChamados = async () => {
    const data = await listarChamados();
    setChamados(data);
  };

  useEffect(() => {
    carregarChamados();
  }, []);

  const abertos = chamados.filter(c => c.status === "aberto");
  const andamento = chamados.filter(c => c.status === "em andamento");
  const finalizados = chamados.filter(c => c.status === "finalizado");

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 3 }}
      >
        <Typography variant="h4">
          Dashboard
        </Typography>

        <Button
          variant="contained"
          onClick={() => navigate("/novo-chamado")}
        >
          Abrir Chamado
        </Button>
      </Stack>

      <Grid container spacing={2}>
        {/* ABERTOS */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Abertos ({abertos.length})
            </Typography>

            {abertos.map(c => (
              <Paper key={c.id} sx={{ p: 1, mb: 1 }}>
                {c.titulo}
              </Paper>
            ))}
          </Paper>
        </Grid>

        {/* EM ANDAMENTO */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Em Andamento ({andamento.length})
            </Typography>

            {andamento.map(c => (
              <Paper key={c.id} sx={{ p: 1, mb: 1 }}>
                {c.titulo}
              </Paper>
            ))}
          </Paper>
        </Grid>

        {/* FINALIZADOS */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Finalizados ({finalizados.length})
            </Typography>

            {finalizados.map(c => (
              <Paper key={c.id} sx={{ p: 1, mb: 1 }}>
                {c.titulo}
              </Paper>
            ))}
          </Paper>
        </Grid>
      </Grid>

    </>
  );
}
