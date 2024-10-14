# Backend Book API

Este proyecto es una API para gestionar una colección de libros, construida con Node.js, Express y Sequelize para la interacción con una base de datos MySQL. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en los libros.

## Contenido

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Ejecutar la Aplicación](#ejecutar-la-aplicación)
- [Pruebas](#pruebas)


## Características

- **Crear un libro**: Permite agregar un nuevo libro a la colección.
- **Leer libros**: Permite obtener todos los libros o un libro específico.
- **Actualizar un libro**: Permite modificar la información de un libro existente.
- **Eliminar un libro**: Permite eliminar un libro de la colección.

## Tecnologías Utilizadas

- Node.js
- Express
- Sequelize
- MySQL
- Jest (para pruebas)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Arthurmm77/backend-book.git
   cd backend-book

2.Instala las dependencias:

      npm install
      
3.Crea un archivo .env en la raíz del proyecto y configura tus variables de entorno:

      DB_HOST=localhost
      DB_USER=tu_usuario
      DB_PASSWORD=tu_contraseña
      DB_NAME=nombre_base_de_datos

## Ejecutar la Aplicación

      npm start
      
## Pruebas

      npm test
