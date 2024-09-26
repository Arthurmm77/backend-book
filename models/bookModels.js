import { DataTypes } from "sequelize";
import connection_db from "../database/connectionDb.js";

const bookModel = connection_db.define(
  "Book",
  {
    bookTittle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    authorName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

// Exportar el modelo
export default bookModel;
