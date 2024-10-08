import { Sequelize } from "sequelize";

const connection_db = new Sequelize("book_app", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
  define: { timestamps: false },
});

export default connection_db;
