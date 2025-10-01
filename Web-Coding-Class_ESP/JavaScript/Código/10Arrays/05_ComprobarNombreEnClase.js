function estaEnLaClase(nombre, listaDeClase) {
  return listaDeClase.includes(nombre);
}

const clase = ["Ana", "Luis", "María", "Carlos"];
const nombreBuscado = "María";

if (estaEnLaClase(nombreBuscado, clase)) {
  console.log(`${nombreBuscado} está en la clase.`);
} else {
  console.log(`${nombreBuscado} no está en la clase.`);
}