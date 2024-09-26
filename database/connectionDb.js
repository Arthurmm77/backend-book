import { Sequelize } from "sequelize";

const connection_db = new Sequelize("book_app", "root", "123456", {
  host: "localhost", // Cambiar de "localhost" a "127.0.0.1"
  dialect: "mysql",
  define: { timestamps: false },
});

export default connection_db;
