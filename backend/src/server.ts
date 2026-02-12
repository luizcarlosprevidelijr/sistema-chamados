import app from "./app";
import sequelize from "./config/database";

const PORT = 3000;

async function startServer() {
  try {
    await sequelize.authenticate();
       await sequelize.sync();
    console.log("Tabelas sincronizadas ✅");
    console.log("Banco conectado com sucesso ✅");

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });

  } catch (error) {
    console.error("Erro ao conectar no banco ❌", error);
  }
}

startServer();
