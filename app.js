import express from "express";
import connection_db from "./database/connectionDb.js";
import bookModel from "./models/bookModels.js"; // Importación correcta del modelo
import bookRouter from "./routers/bookRoutes.js"; // Importación de las rutas

const app = express();

// Middleware para procesar JSON
app.use(express.json());

// Ruta de prueba
app.get("/hola", (req, res) => {
  res.send("Hola primera API");
});

// Usar el router para las rutas de libros
app.use("/books", bookRouter);

// Función asíncrona para manejar la conexión a la base de datos
const startServer = async () => {
  try {
    // Autenticación de la base de datos
    await connection_db.authenticate();
    console.log("😍 Conexión exitosa a la base de datos");

    // Sincronización del modelo
    await bookModel.sync({ force: false }); // Asegúrate de que bookModel esté bien importado
    console.log("🥳 Tabla de libros sincronizada");
  } catch (error) {
    console.error("😢 Error en la conexión a la base de datos", error);
  }

  // Iniciar el servidor
  app.listen(8000, () => {
    console.log("😃 Servidor corriendo en http://localhost:8000");
  });
};

// Ejecutar la función para iniciar el servidor
startServer();
