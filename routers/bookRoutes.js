import express from "express";
import { getAllBooks } from "../controllers/bookControllers.js";

const bookRouter = express.Router();

// Definir las rutas
bookRouter.get("/", getAllBooks); // Ruta para obtener todos los libros

export default bookRouter; // Exportar el router
