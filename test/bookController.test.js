// test/bookController.test.js
import request from "supertest";
import { app, server } from "../app.js";
import connection_db from "../database/connectionDb.js"; // Para cerrar la conexión

describe("CRUD books", () => {
  let createdBookId;

  beforeAll(async () => {
    await connection_db.authenticate(); // Autenticar la base de datos antes de las pruebas
  });

  afterAll(async () => {
    await connection_db.close(); // Cerrar la conexión de la base de datos
    if (server) {
      server.close();
    }
  });

  it("should create a book", async () => {
    const bookData = {
      title: "Test Book",
      author: "Test Author",
      description: "This is a test description",
    };

    const response = await request(app).post("/books").send(bookData);
    expect(response.statusCode).toBe(201);
    expect(response.body.bookTittle).toBe(bookData.title);
    expect(response.body.authorName).toBe(bookData.author);
    expect(response.body.bookDescription).toBe(bookData.description);

    createdBookId = response.body.id; // Guarda el ID del libro creado
  });

  it("should get all books", async () => {
    const response = await request(app).get("/books");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("should update a book", async () => {
    const updatedBookData = {
      title: "Updated Test Book",
      author: "Updated Test Author",
      description: "This is an updated test description",
    };

    const response = await request(app)
      .put(`/books/${createdBookId}`) // Usar el ID del libro creado
      .send(updatedBookData);

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Book updated successfully");
  });
});
