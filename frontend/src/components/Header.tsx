import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export function Header() {
  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{
        backgroundColor: "#0f172a",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <SupportAgentIcon />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Service Desk
          </Typography>
        </Box>

        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          Sistema de Chamados TI
        </Typography>

      </Toolbar>
    </AppBar>
  );
}
