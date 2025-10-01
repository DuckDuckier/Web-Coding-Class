// Definimos la clase Animal
class Animal {
  constructor(nombre, especie, sonido) {
    this.nombre = nombre;
    this.especie = especie;
    this.sonido = sonido;
  }

  hacerSonido() {
    return `${this.nombre} dice: ${this.sonido}`;
  }
}

// Lista para guardar los animales creados
const animales = [];

document.getElementById("crearAnimal").addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value;
  const especie = document.getElementById("especie").value;
  const sonido = document.getElementById("sonido").value;

  if (nombre && especie && sonido) {
    const nuevoAnimal = new Animal(nombre, especie, sonido);
    animales.push(nuevoAnimal);

    const li = document.createElement("li");
    li.textContent = `${nuevoAnimal.nombre} (${nuevoAnimal.especie}) - ${nuevoAnimal.hacerSonido()}`;
    document.getElementById("listaAnimales").appendChild(li);

    // Limpiar campos
    document.getElementById("nombre").value = "";
    document.getElementById("especie").value = "";
    document.getElementById("sonido").value = "";
  }
});
