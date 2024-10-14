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
// Actualizar un libro
export const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, description } = req.body;

  try {
    // Buscar el libro por su ID
    const book = await bookModel.findByPk(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    // Actualizar los campos del libro
    book.title = title || book.title;
    book.author = author || book.author;
    book.description = description || book.description;

    // Guardar los cambios
    await book.save();

    // Responder con éxito
    return res.status(200).json({ message: "Book updated successfully" });
  } catch (error) {
    console.error("Error updating book:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while updating the book" });
  }
};

export default {
  getAllBooks,
  createBook,
  updateBook,
};
