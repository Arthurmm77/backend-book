// config.js
import { config } from "dotenv";

// Cargar las variables de entorno desde el archivo .env
config();

// Exportar las variables necesarias
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_DATABASE_NAME = process.env.DB_DB_DATABASENAME;
export const DB_USER = process.env.DB_USERNAME;
export const DB_HOST = process.env.DB_HOST;
