import express from "express";
import bookController from "../controllers/bookControllers.js";

const bookRouter = express.Router();

// Definir las rutas
bookRouter.get("/", bookController.getAllBooks);
bookRouter.post("/", bookController.createBook);
bookRouter.put("/:id", bookController.updateBook);

export default bookRouter; // Exportar el router
