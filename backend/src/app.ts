import express from "express";
import cors from "cors";
import chamadoRoutes from "./routes/chamadoRoutes";

const app = express();

app.use(cors()); // 👈 ESSA LINHA RESOLVE

app.use(express.json());

app.use("/chamados", chamadoRoutes);

export default app;
