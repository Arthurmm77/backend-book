# API de Gestión de Libros

Este proyecto es una API desarrollada en Node.js usando Express y Sequelize, con conexión a una base de datos MySQL. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una colección de libros.

## Requisitos previos

- [Node.js](https://nodejs.org/en/download/)
- [MySQL](https://dev.mysql.com/downloads/mysql/)
- [Git](https://git-scm.com/downloads)

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/arthurmm77/backend-book.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd backend-book
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Crea una base de datos MySQL llamada `book_database` o el nombre que prefieras.

5. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno con la información de tu base de datos MySQL:

    ```bash
    DB_NAME=book_database
    DB_USER=tu_usuario
    DB_PASSWORD=tu_contraseña
    DB_HOST=localhost
    DB_DIALECT=mysql
    ```

## Conexión con MySQL

El archivo `connectionDb.js` contiene la configuración para conectar a la base de datos MySQL usando Sequelize.

```javascript
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const connection_db = new Sequelize(
  process.env.DB_NAME, // Nombre de la base de datos
  process.env.DB_USER, // Usuario
  process.env.DB_PASSWORD, // Contraseña
  {


    host: process.env.DB_HOST, // Host (generalmente localhost)
    dialect: process.env.DB_DIALECT, // El dialecto de la base de datos (mysql en este caso)
  }
);

export default connection_db;





1. Para iniciar el servidor, ejecuta:

    npm start

Para iniciar los test :

    npm test

