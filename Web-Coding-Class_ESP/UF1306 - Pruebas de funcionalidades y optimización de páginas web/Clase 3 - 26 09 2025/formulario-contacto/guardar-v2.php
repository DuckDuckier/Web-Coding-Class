<?php
// Activamos el reporte de errores con excepciones
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

// Incluimos la conexión
include("db.php");

// Recogemos los datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

try {
  // Consulta SQL con tabla mal escrita para provocar error (ejemplo educativo)
  $sql = "INSERT INTO mensajess (nombre, email, mensaje) VALUES ('$nombre', '$email', '$mensaje')";
  
  // Ejecutamos la consulta
  $conexion->query($sql);

  // Mensaje de éxito
  echo "<h2>Gracias por tu mensaje, $nombre</h2>";
  echo "<p>Tu mensaje ha sido guardado correctamente.</p>";
  echo "<p>Este es tu mensaje enviado: <strong>$mensaje</strong>, desde el correo <strong>$email</strong>.</p>";

} catch (mysqli_sql_exception $e) {
  // Capturamos y mostramos el error
  echo "<p class='text-danger'> FALLA " . $e->getMessage() . "</p>";
}

// Cerramos la conexión
$conexion->close();
?>
