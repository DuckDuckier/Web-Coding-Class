function Nombre1() {
  document.getElementById("menu").classList.toggle("hidden");
}


function Nombre2() {
  autenticarUsuario; 
}


function Nombre3() {
  let lista = [];
  alert(lista[0].nombre); 
}


function Nombre4() {
  let x = "5";
  let y = 5;
  if (x === y) {
    alert("Son iguales"); 
  }
}


function Nombre5() {
  let num = Math.random * 10; 
  document.getElementById("aleatorio").textContent = num;
}


function mostrarFecha() {
  document.getElementById("fecha").textContent = new Date().toLocaleDateString();
}

function Nombre7() {
  document.getElementById("error").innertext = "¡Ups!"; 
}


function Nombre8() {
  let lista = document.querySelectorAll("li");
  for (let i = 0; i <= lista.length; i++) { 
    lista[i].style.color = "red";
  }
}


function Nombre9() {
  boton.addEventListener("click", function() { 
    alert("Botón activado");
  });
}


function Nombre10() {
  let num = parseInt("abc123"); // Error: resultado NaN
  document.getElementById("numero").textContent = num;
}

function sumar() {
  let a = parseFloat(document.getElementById("num1").value);
  let b = parseFloat(document.getElementById("num2").value);
  document.getElementById("resultado").textContent = a + b;
}

function validarEmail() {
  let email = document.getElementById("email").value;
  let valido = /\S+@\S+\.\S+/.test(email);
  document.getElementById("valido").textContent = valido ? "Email válido" : "Email inválido";
}

let count = 0;
function incrementar() {
  count++;
  document.getElementById("contador").textContent = count;
}
function decrementar() {
  count--;
  document.getElementById("contador").textContent = count;
}

function Nombre() {
  mensaje = "Hola usuario";
  document.getElementById("bienvenida").textContent = mensaje;
}


function Nombre13() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  document.getElementById("resultado").textContent = a + b; 
}

function cambiarColor() {

  const color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  document.body.style.backgroundColor = color;

 
  const r = parseInt(color.substr(1, 2), 16);
  const g = parseInt(color.substr(3, 2), 16);
  const b = parseInt(color.substr(5, 2), 16);
  const luminancia = (0.299 * r + 0.587 * g + 0.114 * b);

 
  const textoColor = luminancia > 150 ? "#000000" : "#ffffff";
  document.body.style.color = textoColor;

  
  const cards = document.querySelectorAll(".card, .respuesta");
  cards.forEach(card => {
    card.style.backgroundColor = textoColor === "#000000" ? "#ffffffcc" : "#000000cc";
    card.style.color = textoColor;
  });

  
  let info = document.getElementById("colorActual");
  if (!info) {
    info = document.createElement("p");
    info.id = "colorActual";
    info.className = "respuesta";
    document.body.appendChild(info);
  }
  info.textContent = ` Fondo: ${color} | Texto: ${textoColor}`;
}
function Nombre15() {
  let lista = [];
  alert(lista[0].nombre); 
}


function Nombre16() {
  let x = "5";
  let y = 5;
  if (x === y) {
    alert("Son iguales"); 
  }
}


function Nombre17() {
  let num = Math.random * 10; 
  document.getElementById("aleatorio").textContent = num;
}



function Nombre18() {
  setInterval(() => {
    document.getElementById("hora").textContent = new Date().toLocaleTimeString();
  }, 1000);
}
mostrarHora();

function validarFormulario() {
  let nombre = document.getElementById("nombre").value;
  let mensaje = document.getElementById("mensaje").value;
  if (!nombre || !mensaje) {
    alert("Completa todos los campos");
    return false;
  }
  alert("Formulario enviado");
  return true;
}

function convertir() {
  let c = parseFloat(document.getElementById("celsius").value);
  let f = (c * 9/5) + 32;
  document.getElementById("fahrenheit").textContent = f + " °F";
}

function mostrarCursos() {
  let lista = ["HTML", "CSS", "JavaScript", "React", "Vue"];
  let ul = document.getElementById("cursos");
  ul.innerHTML = "";
  lista.forEach(curso => {
    let li = document.createElement("li");
    li.textContent = curso;
    ul.appendChild(li);
  });
}

function calcularIVA() {
  let precio = parseFloat(document.getElementById("precio").value);
  let iva = precio * 0.21;
  let cantidad = precio+iva;
  document.getElementById("iva").textContent = "IVA: " + iva.toFixed(2) + " TOTAL CON IVA ES: " + cantidad.toFixed(2);
}

function animarTexto() {
  let texto = document.getElementById("animado");
  texto.style.transition = "transform 0.5s";
  texto.style.transform = "scale(1.5)";
  setTimeout(() => texto.style.transform = "scale(1)", 500);
}

function mostrarIP() {
  document.getElementById("ip").textContent = "192.168.1.1 (simulado)";
}

function generarPassword(longitud = 12) {
  const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";

  for (let i = 0; i < longitud; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    password += caracteres[indice];
  }

  document.getElementById("password").textContent = password;
}

function iniciarCuenta() {
  let tiempo = 10;
  const cuenta = document.getElementById("cuenta");
  cuenta.textContent = tiempo;

  const intervalo = setInterval(() => {
    tiempo--;
    cuenta.textContent = tiempo;
    if (tiempo <= 0) {
      clearInterval(intervalo);
      cuenta.textContent = "¡Tiempo terminado!";
    }
  }, 1000);
}
function Nombre27() {
  document.querySelector("h1")[0].style.display = "none"; 
}



function Nombre28() {
  document.getElementById("texto").fontSize = "20px"; 
}


function mostrarSO() {
  const agente = navigator.userAgent;
  let sistema = "Desconocido";

  if (agente.includes("Win")) sistema = "Windows";
  else if (agente.includes("Mac")) sistema = "macOS";
  else if (agente.includes("Linux")) sistema = "Linux";
  else if (agente.includes("Android")) sistema = "Android";
  else if (agente.includes("like Mac")) sistema = "iOS";

  document.getElementById("so").textContent = "Sistema operativo: " + sistema;
}


function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

}

// function aaaa() {
//   if (document.body.classList.contains("dark-mode")) {
//     document.body.style.backgroundColor = "#121212"; 
//   } else {
//     document.body.style.backgroundColor = "#f9f9f9"; 
//   }
// }


function Nombre32() {
  document.querySelector("h1")[0].style.display = "none"; 
}


function Nombre33() {
  mensaje = "Hola usuario";
  document.getElementById("bienvenida").textContent = mensaje;
}


function Nombre34() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  document.getElementById("resultado").textContent = a + b; 
}


function Nombre35() {
  document.getElementById("texto").fontSize = "20px"; 
}


function Nombre36() {
  document.getElementById("item").removeChild(); 
}


function Nombre37() {
  let edad = parseInt(document.getElementById("edad").value);
  if (edad = 18) { 
    alert("Eres mayor de edad");
  }
}


function Nombre38() {
  setTimeout(alert("Hola"), 2000); 
}

function Nombre39() {
  document.getElementById("caja").class = "resaltado"; 
}


function Nombre40() {
  let usuario = { nombre: "Luis" };
  alert(usuario.nombreCompleto); 
}

