// controllers/bookControllers.js
import bookModel from "../models/bookModel.js";

// Función para obtener todos los libros
const getAllBooks = async (req, res) => {
  try {
    const books = await bookModel.findAll();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los libros" });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, description } = req.body;

    // Validar que todos los campos estén presentes
    if (!title || !author || !description) {
      return res.status(400).json({ error: "Todos los campos son requeridos" });
    }

    const newBook = await bookModel.create({
      bookTittle: title,
      authorName: author,
      bookDescription: description,
    });

    res.status(201).json(newBook);
  } catch (error) {
    console.error("Error al crear el libro:", error);
    res.status(500).json({ error: "Error al crear el libro" });
  }
};

export default {
  getAllBooks,
  createBook,
};
