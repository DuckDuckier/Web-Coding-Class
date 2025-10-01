CREATE DATABASE contacto;
USE contacto;

CREATE TABLE mensajes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  email VARCHAR(100),
  mensaje TEXT
);
