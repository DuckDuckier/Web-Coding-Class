<?php
// Conexión a la base de datos 'tienda'
$conexion = new mysqli("localhost", "root", "", "tienda");

// Verificamos si hubo error
if ($conexion->connect_error) {
  die("Error de conexión: " . $conexion->connect_error);
}
?>
