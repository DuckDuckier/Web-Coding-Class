<?php
include("db.php");

$accion = $_POST['accion'];

if ($accion === "crear") {
  $stmt = $conexion->prepare("INSERT INTO productos (nombre, precio) VALUES (?, ?)");
  $stmt->bind_param("sd", $_POST['nombre'], $_POST['precio']);
  $stmt->execute();
}

if ($accion === "editar") {
  $stmt = $conexion->prepare("UPDATE productos SET nombre=?, precio=? WHERE id=?");
  $stmt->bind_param("sdi", $_POST['nombre'], $_POST['precio'], $_POST['id']);
  $stmt->execute();
}

if ($accion === "eliminar") {
  $stmt = $conexion->prepare("DELETE FROM productos WHERE id=?");
  $stmt->bind_param("i", $_POST['id']);
  $stmt->execute();
}

header("Location: index.php");
