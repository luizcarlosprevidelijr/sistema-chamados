import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    "sistema_chamados",
    "root",
    "",
    {
        host: "localhost",
        dialect: "mysql",
        logging: false
    }
);

export default sequelize;
