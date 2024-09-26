import bookModel from "../models/bookModels.js";

// Controlador para obtener todos los libros
const getAllBooks = async (req, res) => {
  try {
    const books = await bookModel.findAll(); // Añadir 'await' para obtener los datos correctamente
    res.json(books); // Devolver los libros en formato JSON
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getAllBooks }; // Exporta la función sin necesidad de bookRoutes
