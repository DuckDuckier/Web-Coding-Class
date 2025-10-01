<!-- archivo: index.php -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Hola Mundo en PHP</title>
</head>
<body>

  <h1>Formulario de Bienvenida</h1>

  <form method="POST">
    <label for="nombre">Escribe tu nombre:</label>
    <input type="text" id="nombre" name="nombre" required>
    <button type="submit">Enviar</button>
  </form>

  <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $nombre = htmlspecialchars($_POST["nombre"]);
      echo "<h2>Hola, $nombre  ¡Bienvenido al mundo PHP!</h2>";
    }
  ?>

</body>
</html>
