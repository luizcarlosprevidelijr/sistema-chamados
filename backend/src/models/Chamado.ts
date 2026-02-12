import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Chamado extends Model {
  public id!: number;
  public titulo!: string;
  public descricao!: string;
  public status!: string;
}

Chamado.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "aberto",
    },
  },
  {
    sequelize,
    modelName: "Chamado",
    tableName: "chamados",
  }
);

export default Chamado;
