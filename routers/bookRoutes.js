import express from "express";
import bookController from "../controllers/bookControllers.js"; // Asegúrate de que la ruta sea correcta

const bookRouter = express.Router();

// Definir las rutas
bookRouter.get("/", bookController.getAllBooks); // Cambia "/books" a "/" ya que ya estás usando el prefijo en app.js
bookRouter.post("/", bookController.createBook);

export default bookRouter; // Exportar el router
