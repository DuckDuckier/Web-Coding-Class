<?php
// Incluimos el archivo de conexión
include("db.php");

// Recogemos los datos del formulario usando $_POST
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

// Preparamos la consulta SQL para insertar los datos
$sql = "INSERT INTO mensajes (nombre, email, mensaje) VALUES ('$nombre', '$email', '$mensaje')";

// Ejecutamos la consulta y verificamos si fue exitosa
if ($conexion->query($sql)) {
  echo "<h2>Gracias por tu mensaje, $nombre</h2>";
  echo "<p>Tu mensaje ha sido guardado correctamente.</p>";
} else {
  echo "Error al guardar el mensaje: " . $conexion->error;
}

// Cerramos la conexión
$conexion->close();
?>
