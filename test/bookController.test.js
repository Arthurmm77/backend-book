// test/bookController.test.js
import request from "supertest";
import app from "../app.js"; // Asegúrate de importar correctamente tu app
import connection_db from "../database/connectionDb.js"; // Para cerrar la conexión

describe("CRUD books", () => {
  beforeAll(async () => {
    await connection_db.authenticate();
  });

  afterAll(async () => {
    await connection_db.close();
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
  });

  it("should get all books", async () => {
    const response = await request(app).get("/books");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
