let carName = 'Volvo';
let x = 50;
console.log(x);

let a = 5;
let b = 10;
let suma = a + b;

console.log(suma);

let y = 15;

let z = x + y;

//alert("El resultado de x + y es: " + z);//

let numero1 = 5;
let numero2 = 8;

let resultado = numero1 * numero2;

console.log("El resultado de la multiplicación es: " + resultado);

let edad = 20;

if (edad >= 18) {
  console.log("La persona es mayor de edad.");
} else {
  console.log("La persona es menor de edad.");
}

let numero = 777;
let texto = numero.toString();

console.log(texto);
console.log(typeof texto);

let num1 = 8;
let num2 = 7;
let num3 = 9;

let promedio = (num1 + num2 + num3) / 3;

console.log("El promedio es: " + promedio);

let persona = {
  nombre: "Carlos",
  edad: 30
};

console.log(persona);
console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);

let text = "";

if (text === "") {
  console.log("La cadena está vacía.");
} else {
  console.log("La cadena NO está vacía.");
}

let esVerdadero = true;
let number = 42;

console.log(typeof esVerdadero);
console.log(typeof number);

let numberr = 7;

let result = (numberr % 2 === 0) ? "Par" : "Impar";

console.log("El número es: " + result);

let frutas = ["Manzana", "Banana", "Naranja", "Uva", "Sandía"];

console.log("La tercera fruta es: " + frutas[2]);

let numeros = [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < numeros.length; i++) {
  sum += numeros[i];
}

console.log("La suma total es: " + suma);

let valor1 = 5;
let valor2 = "5";

if (valor1 === valor2) {
  console.log("Los valores son iguales y del mismo tipo.");
} else {
  console.log("Los valores NO son iguales o NO son del mismo tipo.");
}

let textoVacio = "";

let valorBooleano = Boolean(textoVacio);

console.log(valorBooleano);

let cadena = "123";

let nambar = parseInt(cadena);

console.log(nambar);
console.log(typeof nambar);

let numerot = 10;

numero += 5;
console.log(numerot);

numero -= 3;
console.log(numerot);

numero *= 2;
console.log(numerot);

numero /= 4;
console.log(numerot);

let nombre = "Lucía";

alert("¡Hola, " + nombre + "! Bienvenida a nuestro sitio.");

let numeritoo = 120;
let esMayorQue100 = numeritoo > 100;

console.log("¿El número es mayor que 100?", esMayorQue100);
