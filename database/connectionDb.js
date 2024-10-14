// database/connectionDb.js
import { Sequelize } from "sequelize";
import {
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE_NAME,
  DB_HOST,
} from "../config/config.js";

const connection_db = new Sequelize(DB_DATABASE_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql", // O el dialecto que estés utilizando
});

// Probar la conexión
try {
  await connection_db.authenticate();
  console.log("Conexión a la base de datos establecida correctamente.");
} catch (error) {
  console.error("No se pudo conectar a la base de datos:", error);
}

export default connection_db;
