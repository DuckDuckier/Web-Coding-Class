<?php
// Conectamos con la base de datos MySQL
$conexion = new mysqli("localhost", "root", "", "contacto");

// Verificamos si hubo un error en la conexión
if ($conexion->connect_error) {
  die("Error de conexión: " . $conexion->connect_error);
}
?>
