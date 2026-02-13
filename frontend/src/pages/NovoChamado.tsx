import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { criarChamado } from "../services/chamadoService";
import type { Chamado } from "../types/Chamado";

import {
  Paper,
  TextField,
  Button,
  Stack,
  Typography,
  MenuItem,
  Box
} from "@mui/material";


export default function NovoChamado() {
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [status, setStatus] =
    useState<Chamado["status"]>("aberto");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    await criarChamado({
      titulo,
      descricao,
      status,
    });

    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 500,
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" sx={{ mb: 3 }}>
          Novo Chamado
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="Título"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
              fullWidth
            />

            <TextField
              label="Descrição"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
              multiline
              rows={4}
              fullWidth
            />

            <TextField
              select
              label="Status"
              value={status}
              onChange={(e) =>
                setStatus(e.target.value as Chamado["status"])
              }
              fullWidth
            >
              <MenuItem value="aberto">Aberto</MenuItem>
              <MenuItem value="em andamento">Em andamento</MenuItem>
              <MenuItem value="finalizado">Finalizado</MenuItem>
            </TextField>

            <Button
              type="submit"
              variant="contained"
              size="large"
            >
              Criar Chamado
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}