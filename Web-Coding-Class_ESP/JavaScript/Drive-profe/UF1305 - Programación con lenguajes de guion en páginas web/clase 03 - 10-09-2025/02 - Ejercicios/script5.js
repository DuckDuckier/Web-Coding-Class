// Definimos la clase
class Coche {
  constructor(marca, modelo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
  }

  describir() {
    return `Este coche es un ${this.marca} ${this.modelo} de color ${this.color}.`;
  }
}

// Evento para mostrar el ejemplo
document.getElementById("mostrarCoche").addEventListener("click", () => {
  const miCoche = new Coche("Toyota", "Corolla", "Azul");

  const codigoEjemplo = `class Coche {
  constructor(marca, modelo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
  }

  describir() {
    return \`Este coche es un \${this.marca} \${this.modelo} de color \${this.color}.\`;
  }
}

const miCoche = new Coche("Toyota", "Corolla", "Azul");
console.log(miCoche.describir());`;

  document.getElementById("codigo").textContent = codigoEjemplo;
  document.getElementById("resultado").textContent = miCoche.describir();
});
