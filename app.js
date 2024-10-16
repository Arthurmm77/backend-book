// app.js
import express from "express";
import connection_db from "./database/connectionDb.js";
import bookRouter from "./routers/bookRoutes.js";

const app = express();

// Middleware para procesar JSON
app.use(express.json());

// Ruta de prueba
app.get("/hola", (req, res) => {
  res.send("Hola primera API");
});

// Usar el router para las rutas de libros
app.use("/books", bookRouter);

let server; // Declara la variable del servidor

// Función asíncrona para manejar la conexión a la base de datos
const startServer = async () => {
  try {
    // Autenticación de la base de datos
    await connection_db.authenticate();
    console.log("😍 Conexión exitosa a la base de datos");

    // Iniciar el servidor
    server = app.listen(8005, () => {
      console.log("😃 Servidor corriendo en http://localhost:8005");
    });
  } catch (error) {
    console.error("😢 Error en la conexión a la base de datos", error);
  }
};

// Ejecutar la función para iniciar el servidor solo si no estamos en modo de test
if (process.env.NODE_ENV !== "test") {
  startServer();
}

// Exportar app y server para usarlos en pruebas
export { app, server }; // Exportar las variables de forma nombrada
