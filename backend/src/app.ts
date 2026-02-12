import express from "express";
import chamadoRoutes from "./routes/chamadoRoutes";

const app = express();

app.use(express.json());

app.use("/chamados", chamadoRoutes);

export default app;
