<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Guía Visual CRUD Tienda PHP + Bootstrap</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
  <style>
    body {
      background-color: #f0f4f8;
    }
    .container {
      max-width: 1000px;
      margin: auto;
      background-color: #ffffff;
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 0 20px rgba(0,0,0,0.1);
    }
    h1, h2 {
      color: #2c3e50;
    }
    .step {
      margin-top: 40px;
    }
    .step h2 {
      font-size: 1.5rem;
      margin-bottom: 15px;
    }
    .step .icon {
      font-size: 1.8rem;
      margin-right: 10px;
      color: #0d6efd;
    }
    pre {
      background-color: #f8f9fa;
      padding: 15px;
      border-left: 5px solid #0d6efd;
      font-size: 0.95rem;
      overflow-x: auto;
    }
    .footer-note {
      margin-top: 60px;
      text-align: center;
      font-style: italic;
      color: #6c757d;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1 class="text-center mb-5"><i class="bi bi-shop-window"></i> Guía Visual: Mini Tienda CRUD en PHP + Bootstrap</h1>

    <div class="step">
      <h2><i class="bi bi-database icon"></i> Paso 1: Crear la base de datos</h2>
      <p>Usa PhpMyAdmin para crear la base de datos <strong>tienda</strong> y la tabla <code>productos</code>:</p>
      <pre>
CREATE DATABASE tienda;
USE tienda;

CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  precio DECIMAL(6,2)
);
      </pre>
    </div>

    <div class="step">
      <h2><i class="bi bi-plug icon"></i> Paso 2: Conexión a la base de datos</h2>
      <p>Archivo <code>db.php</code> para conectar con MySQL:</p>
      <pre>
$conexion = new mysqli("localhost", "root", "", "tienda");
if ($conexion->connect_error) {
  die("Error de conexión: " . $conexion->connect_error);
}
      </pre>
    </div>

    <div class="step">
      <h2><i class="bi bi-table icon"></i> Paso 3: Mostrar productos (index.php)</h2>
      <p>Consulta y muestra productos en una tabla con botones para editar y eliminar:</p>
      <pre>
$resultado = $conexion->query("SELECT * FROM productos");
while ($producto = $resultado->fetch_assoc()) {
  echo "&lt;tr&gt;";
  echo "&lt;td&gt;" . $producto['nombre'] . "&lt;/td&gt;";
  echo "&lt;td&gt;" . $producto['precio'] . "&lt;/td&gt;";
  echo "&lt;td&gt;&lt;a href='editar.php?id=...'&gt;Editar&lt;/a&gt;&lt;/td&gt;";
  echo "&lt;/tr&gt;";
}
      </pre>
    </div>

    <div class="step">
      <h2><i class="bi bi-plus-circle icon"></i> Paso 4: Crear producto (crear.php)</h2>
      <p>Formulario para ingresar nombre y precio:</p>
      <pre>
if ($_POST) {
  $nombre = $_POST['nombre'];
  $precio = $_POST['precio'];
  $conexion->query("INSERT INTO productos (nombre, precio) VALUES ('$nombre', '$precio')");
}
      </pre>
    </div>

    <div class="step">
      <h2><i class="bi bi-pencil-square icon"></i> Paso 5: Editar producto (editar.php)</h2>
      <p>Formulario que carga los datos actuales y permite actualizarlos:</p>
      <pre>
$id = $_GET['id'];
$producto = $conexion->query("SELECT * FROM productos WHERE id=$id")->fetch_assoc();

if ($_POST) {
  $conexion->query("UPDATE productos SET nombre='...', precio='...' WHERE id=$id");
}
      </pre>
    </div>

    <div class="step">
      <h2><i class="bi bi-trash icon"></i> Paso 6: Eliminar producto (eliminar.php)</h2>
      <p>Elimina el producto por su ID:</p>
      <pre>
$id = $_GET['id'];
$conexion->query("DELETE FROM productos WHERE id=$id");
      </pre>
    </div>

    <div class="step">
      <h2><i class="bi bi-cart icon"></i> Paso 7: Ver carrito (carrito.php)</h2>
      <p>Usa <code>$_SESSION</code> para mostrar productos agregados:</p>
      <pre>
foreach ($_SESSION['carrito'] as $id) {
  $producto = $conexion->query("SELECT * FROM productos WHERE id=$id")->fetch_assoc();
  echo $producto['nombre'] . " - " . $producto['precio'];
}
      </pre>
    </div>

    <div class="footer-note">
      💡 Puedes imprimir esta guía o usarla como referencia mientras desarrollas tu proyecto.
    </div>
  </div>
</body>
</html>
