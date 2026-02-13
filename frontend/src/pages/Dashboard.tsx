import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listarChamados } from "../services/chamadoService";
import type { Chamado } from "../types/Chamado";
import { ChamadoCard } from "../components/ChamadoCard";

import {
  Grid,
  Paper,
  Typography,
  Button,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip
} from "@mui/material";

export default function Dashboard() {
  const [chamados, setChamados] = useState<Chamado[]>([]);
  const [chamadoSelecionado, setChamadoSelecionado] = useState<Chamado | null>(null);
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

  function getStatusColor(status: string) {
    if (status === "aberto") return "warning";
    if (status === "em andamento") return "info";
    if (status === "finalizado") return "success";
    return "default";
  }

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
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 2, minHeight: "70vh" }}>
            <Typography variant="h6" gutterBottom>
              Abertos ({abertos.length})
            </Typography>

            {abertos.map(c => (
              <ChamadoCard
                key={c.id}
                chamado={c}
                onDetalhes={setChamadoSelecionado}
              />
            ))}
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 2, minHeight: "70vh" }}>
            <Typography variant="h6" gutterBottom>
              Em Andamento ({andamento.length})
            </Typography>

            {andamento.map(c => (
              <ChamadoCard
                key={c.id}
                chamado={c}
                onDetalhes={setChamadoSelecionado}
              />
            ))}
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Paper sx={{ p: 2, minHeight: "70vh" }}>
            <Typography variant="h6" gutterBottom>
              Finalizados ({finalizados.length})
            </Typography>

            {finalizados.map(c => (
              <ChamadoCard
                key={c.id}
                chamado={c}
                onDetalhes={setChamadoSelecionado}
              />
            ))}
          </Paper>
        </Grid>
      </Grid>

      {/* MODAL DE DETALHES */}
      <Dialog
        open={!!chamadoSelecionado}
        onClose={() => setChamadoSelecionado(null)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          {chamadoSelecionado?.titulo}
        </DialogTitle>

        <DialogContent dividers>
          <Typography sx={{ mb: 2 }}>
            {chamadoSelecionado?.descricao}
          </Typography>

          {chamadoSelecionado && (
            <Chip
              label={chamadoSelecionado.status}
              color={getStatusColor(chamadoSelecionado.status) as any}
            />
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setChamadoSelecionado(null)}>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
