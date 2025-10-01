<!-- index.php -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo visual con include()</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 0;
      background-color: #f4f6f8;
      color: #333;
    }
    header {
      background-color: #3498db;
      color: white;
      padding: 20px;
      text-align: center;
    }
    main {
      padding: 30px;
      background-color: #ffffff;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      margin: 20px;
      border-radius: 8px;
    }
    footer {
      background-color: #2c3e50;
      color: white;
      text-align: center;
      padding: 15px;
      position: relative;
      bottom: 0;
      width: 100%;
    }
  </style>
</head>
<body>

  <?php include("header.php"); ?>

  <main>
    <h2>Contenido principal</h2>
    <p>Este es el cuerpo de la página, donde se muestra información dinámica.</p>
    <p>Fecha actual: <strong><?php echo date("d/m/Y"); ?></strong></p>
  </main>

  <?php include("footer.php"); ?>

</body>
</html>
