import { Card, CardContent, Typography, Chip, Button, Stack } from "@mui/material";
import type { Chamado } from "../types/Chamado";

interface Props {
    chamado: Chamado;
    onDetalhes: (chamado: Chamado) => void;
}

export function ChamadoCard({ chamado, onDetalhes }: Props) {
    function getStatusColor(status: string) {
        if (status === "aberto") return "warning";
        if (status === "em andamento") return "info";
        if (status === "finalizado") return "success";
        return "default";
    }

    return (
        <Card sx={{ mb: 2, borderRadius: 3 }}>
            <CardContent>
                <Stack spacing={1}>
                    <Typography variant="h6">
                        {chamado.titulo}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {chamado.descricao}
                    </Typography>

                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Chip
                            label={chamado.status}
                            color={getStatusColor(chamado.status) as any}
                        />

                        <Button
                            size="small"
                            variant="contained"
                            onClick={() => onDetalhes(chamado)}
                        >
                            Detalhes
                        </Button>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
}
