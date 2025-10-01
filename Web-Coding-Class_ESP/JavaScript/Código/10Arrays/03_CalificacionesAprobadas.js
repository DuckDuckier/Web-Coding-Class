function obtenerCalificacionesAprobadas(calificaciones) {
  return calificaciones.filter(calificacion => calificacion >= 70);
}

const calificaciones = [65, 80, 90, 45, 70, 55];
const aprobadas = obtenerCalificacionesAprobadas(calificaciones);

console.log(aprobadas);
