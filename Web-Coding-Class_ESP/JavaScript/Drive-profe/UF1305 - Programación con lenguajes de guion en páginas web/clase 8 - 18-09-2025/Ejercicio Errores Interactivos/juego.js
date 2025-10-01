const contadorPistas = {};
const solucionUsada = {};
let nombreJugador = "";
let puntuacionGlobal = 10.00;
const funciones = {
  ej1: {
    titulo: "ocultarTitulo()",
    codigo: `function ocultarTitulo() {
  document.querySelector("h1")[0].style.display = "none";
}`,
    pistas: [
      "¿querySelector devuelve una lista?",
      "¿Puedes usar [0] con querySelector?",
      "¿Qué devuelve querySelector?",
      "¿Necesitas querySelectorAll?",
      "Usa directamente .style.display en el elemento"
    ],
    solucion: `function ocultarTitulo() {
  document.querySelector("h1").style.display = "none";
}`,
    test: r => r.includes('querySelector("h1")') && !r.includes("[0]"),
    explicacion: "querySelector devuelve un único elemento, no una lista. Usar [0] provoca un error. Se debe acceder directamente al estilo del elemento."
  },

  ej2: {
    titulo: "mostrarBienvenida()",
    codigo: `function mostrarBienvenida() {
  mensaje = "Hola usuario";
  document.getElementById("bienvenida").textContent = mensaje;
}`,
    pistas: [
      "¿Está declarada la variable mensaje?",
      "¿Usaste let/const/var?",
      "Evita variables globales no intencionadas",
      "Declara siempre tus variables",
      "Usa let mensaje = 'Hola usuario';"
    ],
    solucion: `function mostrarBienvenida() {
  let mensaje = "Hola usuario";
  document.getElementById("bienvenida").textContent = mensaje;
}`,
    test: r => r.includes("let mensaje") || r.includes("const mensaje"),
    explicacion: "Usar una variable sin declararla crea una variable global implícita. Es mejor declarar explícitamente con let o const para evitar errores."
  },

  ej3: {
    titulo: "sumarValores()",
    codigo: `function sumarValores() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  document.getElementById("resultado").textContent = a + b;
}`,
    pistas: [
      "¿Estás sumando números o cadenas?",
      "value devuelve texto",
      "Necesitas convertir a número",
      "Usa parseFloat o Number",
      "parseFloat(a) + parseFloat(b)"
    ],
    solucion: `function sumarValores() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  document.getElementById("resultado").textContent = a + b;
}`,
    test: r => r.includes("parseFloat") || r.includes("Number"),
    explicacion: "value devuelve texto. Al sumar sin convertir, se concatenan cadenas. Se debe usar parseFloat para obtener números reales."
  },

  ej4: {
    titulo: "cambiarColorFondo()",
    codigo: `function cambiarColorFondo() {
  document.querySelector("body").backgroundColor = "blue";
}`,
    pistas: [
      "¿backgroundColor es propiedad directa?",
      "¿Dónde se aplica el estilo?",
      "¿Necesitas acceder a .style?",
      "Usa .style.backgroundColor",
      "Aplica el color correctamente"
    ],
    solucion: `function cambiarColorFondo() {
  document.querySelector("body").style.backgroundColor = "blue";
}`,
    test: r => r.includes(".style.backgroundColor"),
    explicacion: "No puedes aplicar backgroundColor directamente al elemento. Debes acceder a su propiedad style para modificar el estilo."
  },

  ej5: {
    titulo: "verificarEdad()",
    codigo: `function verificarEdad() {
  let edad = 18;
  if (edad = 18) {
    console.log("Mayor de edad");
  }
}`,
    pistas: [
      "¿Estás comparando o asignando?",
      "Usa == o === para comparar",
      "edad = 18 asigna, no compara",
      "if (edad === 18) es correcto",
      "Evita confundir = con ==="
    ],
    solucion: `function verificarEdad() {
  let edad = 18;
  if (edad === 18) {
    console.log("Mayor de edad");
  }
}`,
    test: r => r.includes("edad === 18") || r.includes("edad == 18"),
    explicacion: "El operador = asigna valores. Para comparar, debes usar == o ===. Usar = dentro de if genera errores lógicos."
  },

  ej6: {
    titulo: "eliminarElemento()",
    codigo: `function eliminarElemento() {
  document.getElementById("item").removeChild();
}`,
    pistas: [
      "¿removeChild necesita un argumento?",
      "¿Qué hijo estás eliminando?",
      "Debes seleccionar el hijo antes de eliminarlo",
      "Usa parent.removeChild(child)",
      "getElementById no devuelve el hijo directamente"
    ],
    solucion: `function eliminarElemento() {
  const item = document.getElementById("item");
  item.parentNode.removeChild(item);
}`,
    test: r => r.includes("removeChild") && r.includes("parentNode"),
    explicacion: "removeChild necesita un argumento: el hijo que se va a eliminar. Además, debes acceder al padre con parentNode."
  },

  ej7: {
    titulo: "mostrarLongitud()",
    codigo: `function mostrarLongitud() {
  let texto = "JavaScript";
  console.log(texto.lenght);
}`,
    pistas: [
      "¿Está bien escrita la propiedad?",
      "¿lenght existe?",
      "¿No será length?",
      "length devuelve la cantidad de caracteres",
      "Corrige el nombre de la propiedad"
    ],
    solucion: `function mostrarLongitud() {
  let texto = "JavaScript";
  console.log(texto.length);
}`,
    test: r => r.includes("texto.length"),
    explicacion: "La propiedad está mal escrita. Debe ser length, no lenght. JavaScript es sensible a errores tipográficos."
  },

  ej8: {
    titulo: "activarBoton()",
    codigo: `function activarBoton() {
  boton.addEventListener("click", function() {
    alert("Botón activado");
  });
}`,
    pistas: [
      "¿Está definida la variable boton?",
      "¿Has hecho getElementById?",
      "Necesitas seleccionar el botón",
      "Usa document.getElementById",
      "Declara la variable antes de usarla"
    ],
    solucion: `function activarBoton() {
  const boton = document.getElementById("boton");
  boton.addEventListener("click", function() {
    alert("Botón activado");
  });
}`,
    test: r => r.includes("getElementById") && r.includes("addEventListener"),
    explicacion: "La variable boton no está definida. Antes de usarla, debes seleccionarla del DOM con document.getElementById."
  },

  ej9: {
    titulo: "convertirNumero()",
    codigo: `function convertirNumero() {
  let num = parseInt("abc123");
  console.log(num);
}`,
    pistas: [
      "¿Qué devuelve parseInt con letras al inicio?",
      "¿parseInt puede fallar?",
      "¿Qué pasa si el texto no empieza con número?",
      "parseInt devuelve NaN si no hay número inicial",
      "Usa una cadena que empiece con número"
    ],
    solucion: `function convertirNumero() {
  let num = parseInt("123abc");
  console.log(num);
}`,
    test: r => r.includes('parseInt("123abc")'),
    explicacion: "parseInt solo funciona si la cadena comienza con un número. Si empieza con letras, devuelve NaN."
  },

  ej10: {
    titulo: "mostrarFechaActual()",
    codigo: `function mostrarFechaActual() {
  let fecha = new Date;
  console.log(fecha.getFullYear);
}`,
    pistas: [
      "¿getFullYear es una propiedad?",
      "¿Faltan paréntesis?",
      "getFullYear es un método",
      "Debes llamarlo como función",
      "Usa getFullYear()"
    ],
    solucion: `function mostrarFechaActual() {
  let fecha = new Date();
  console.log(fecha.getFullYear());
}`,
    test: r => r.includes("getFullYear()"),
    explicacion: "getFullYear es un método, no una propiedad. Debes llamarlo con paréntesis para obtener el año actual."
  }
};
Object.assign(funciones, {
  ej11: {
    titulo: "mostrarMensajeError()",
    codigo: `function mostrarMensajeError() {
  document.getElementById("error").innertext = "¡Ups!";
}`,
    pistas: [
      "¿innertext es una propiedad válida?",
      "¿No será innerText con T mayúscula?",
      "JavaScript es sensible a mayúsculas",
      "innerText muestra texto visible",
      "Corrige el nombre de la propiedad"
    ],
    solucion: `function mostrarMensajeError() {
  document.getElementById("error").innerText = "¡Ups!";
}`,
    test: r => r.includes("innerText"),
    explicacion: "La propiedad está mal escrita. Debe ser innerText con T mayúscula. JavaScript distingue entre mayúsculas y minúsculas."
  },

  ej12: {
    titulo: "recorrerLista()",
    codigo: `function recorrerLista() {
  let lista = ["a", "b", "c"];
  for (let i = 0; i <= lista.length; i++) {
    console.log(lista[i]);
  }
}`,
    pistas: [
      "¿El índice llega demasiado lejos?",
      "¿Qué valor tiene lista.length?",
      "¿Cuál es el último índice válido?",
      "Usa i < lista.length",
      "Evita acceder fuera del array"
    ],
    solucion: `function recorrerLista() {
  let lista = ["a", "b", "c"];
  for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
  }
}`,
    test: r => r.includes("i < lista.length"),
    explicacion: "El bucle accede a un índice fuera del array. Los arrays van de 0 a length - 1. Debes usar i < lista.length."
  },

  ej13: {
    titulo: "mostrarUsuario()",
    codigo: `function mostrarUsuario() {
  let usuario = { nombre: "Ana" };
  console.log(usuario.nombreCompleto);
}`,
    pistas: [
      "¿Existe la propiedad nombreCompleto?",
      "¿Qué propiedades tiene el objeto?",
      "¿Estás accediendo a una propiedad inexistente?",
      "Usa usuario.nombre",
      "Evita acceder a propiedades no definidas"
    ],
    solucion: `function mostrarUsuario() {
  let usuario = { nombre: "Ana" };
  console.log(usuario.nombre);
}`,
    test: r => r.includes("usuario.nombre"),
    explicacion: "Se intenta acceder a una propiedad que no existe. Esto devuelve undefined. Debes usar propiedades definidas en el objeto."
  },

  ej14: {
    titulo: "mostrarHora()",
    codigo: `function mostrarHora() {
  let hora = Date.now();
  console.log(hora.toLocaleTimeString());
}`,
    pistas: [
      "¿Qué devuelve Date.now()?",
      "¿Es un objeto Date?",
      "¿Puedes usar toLocaleTimeString en un número?",
      "Usa new Date()",
      "Convierte el número en objeto Date"
    ],
    solucion: `function mostrarHora() {
  let hora = new Date();
  console.log(hora.toLocaleTimeString());
}`,
    test: r => r.includes("new Date()") && r.includes("toLocaleTimeString"),
    explicacion: "Date.now() devuelve un número. Para usar métodos como toLocaleTimeString, necesitas un objeto Date."
  },

  ej15: {
    titulo: "generarAleatorio()",
    codigo: `function generarAleatorio() {
  let num = Math.random;
  console.log(num);
}`,
    pistas: [
      "¿Math.random es una función?",
      "¿Faltan paréntesis?",
      "¿Estás accediendo a la función o ejecutándola?",
      "Usa Math.random()",
      "Llama correctamente la función"
    ],
    solucion: `function generarAleatorio() {
  let num = Math.random();
  console.log(num);
}`,
    test: r => r.includes("Math.random()"),
    explicacion: "Math.random es una función. Debes llamarla con paréntesis para obtener un número aleatorio."
  },

  ej16: {
    titulo: "calcularDescuento()",
    codigo: `function calcularDescuento() {
  let precio = 100;
  let porcentaje = 20;
  let descuento = precio * porcentaje / 100;
  console.log(descuento);
}`,
    pistas: [
      "¿El orden de operaciones es correcto?",
      "¿Puedes usar paréntesis para mayor claridad?",
      "precio * (porcentaje / 100)",
      "Evita ambigüedad en la fórmula",
      "Agrupa operaciones con paréntesis"
    ],
    solucion: `function calcularDescuento() {
  let precio = 100;
  let porcentaje = 20;
  let descuento = precio * (porcentaje / 100);
  console.log(descuento);
}`,
    test: r => r.includes("(porcentaje / 100)"),
    explicacion: "Aunque la fórmula puede funcionar, es más claro y seguro agrupar con paréntesis para evitar errores de orden de operaciones."
  },

  ej17: {
    titulo: "mostrarDiaSemana()",
    codigo: `function mostrarDiaSemana() {
  let hoy = new Date();
  console.log(hoy.getDay);
}`,
    pistas: [
      "¿getDay es un método?",
      "¿Faltan paréntesis?",
      "¿Estás accediendo a la función o ejecutándola?",
      "Usa getDay()",
      "Llama correctamente el método"
    ],
    solucion: `function mostrarDiaSemana() {
  let hoy = new Date();
  console.log(hoy.getDay());
}`,
    test: r => r.includes("getDay()"),
    explicacion: "getDay es un método. Debes llamarlo con paréntesis para obtener el número del día de la semana."
  },

  ej18: {
    titulo: "calcularIMC()",
    codigo: `function calcularIMC() {
  let peso = 70;
  let altura = 1.75;
  let imc = peso / altura * altura;
  console.log(imc);
}`,
    pistas: [
      "¿La fórmula es correcta?",
      "¿Estás dividiendo por el cuadrado de la altura?",
      "Usa peso / (altura * altura)",
      "Agrupa correctamente con paréntesis",
      "Evita errores de orden de operaciones"
    ],
    solucion: `function calcularIMC() {
  let peso = 70;
  let altura = 1.75;
  let imc = peso / (altura * altura);
  console.log(imc);
}`,
    test: r => r.includes("(altura * altura)"),
    explicacion: "La fórmula del IMC requiere dividir el peso por el cuadrado de la altura. Sin paréntesis, el cálculo es incorrecto."
  },

  ej19: {
    titulo: "mostrarIP()",
    codigo: `function mostrarIP() {
  let ip = 192.168.1.1;
  console.log(ip);
}`,
    pistas: [
      "¿Estás usando comillas?",
      "¿Es una cadena o un número?",
      "192.168.1.1 sin comillas no es válido",
      "Usa comillas para representar texto",
      "Declara ip como cadena"
    ],
    solucion: `function mostrarIP() {
  let ip = "192.168.1.1";
  console.log(ip);
}`,
    test: r => r.includes('"192.168.1.1"') || r.includes("'192.168.1.1'"),
    explicacion: "Sin comillas, JavaScript interpreta la IP como una operación inválida. Debes usar comillas para que sea una cadena."
  },

  ej20: {
    titulo: "mostrarSO()",
    codigo: `function mostrarSO() {
  let agente = navigator.userAgent;
  if (agente.includes("Mac")) {
    console.log("macOS");
  } else if (agente.includes("like Mac")) {
    console.log("iOS");
  }
}`,
    pistas: [
      "¿El orden de las condiciones es correcto?",
      "¿Qué detecta primero?",
      "¿like Mac puede coincidir con Mac?",
      "Invierte el orden de las condiciones",
      "Detecta iOS antes que macOS"
    ],
    solucion: `function mostrarSO() {
  let agente = navigator.userAgent;
  if (agente.includes("like Mac")) {
    console.log("iOS");
  } else if (agente.includes("Mac")) {
    console.log("macOS");
  }
}`,
    test: r => r.includes('"like Mac"') && r.indexOf('"like Mac"') < r.indexOf('"Mac"'),
    explicacion: "El orden de las condiciones importa. Si 'Mac' se evalúa antes que 'like Mac', los dispositivos iOS pueden ser detectados como macOS."
  }
});

function crearJuego() {
  const contenedor = document.getElementById("juego");
  Object.keys(funciones).forEach(id => {
    contadorPistas[id] = 0;
    solucionUsada[id] = false;
    const func = funciones[id];

    const bloque = document.createElement("div");
    bloque.className = "ejercicio";
    bloque.id = `ejercicio-${id}`;
    bloque.innerHTML = `
      <h3>${func.titulo}</h3>
      <pre><code>${func.codigo}</code></pre>
      <button onclick="mostrarPista('${id}')">Pedir pista</button>
      <button class="btn-solucion" onclick="mostrarSolucion('${id}')"style="display:none;" >Ver solución</button>
      <p class="pista" id="pista-${id}"></p>
      <p class="solucion" id="solucion-${id}"></p>
      <textarea id="respuesta-${id}" placeholder="Escribe tu corrección aquí..."></textarea>
      <button onclick="evaluarRespuesta('${id}')">Evaluar mi código</button>
      <p class="evaluacion" id="evaluacion-${id}"></p>
      <p class="puntos" id="puntos-${id}">Puntos: 0.50</p>
    `;
    contenedor.appendChild(bloque);
  });
}


function mostrarPista(id) {
  if (!contadorPistas[id]) contadorPistas[id] = 0;
  if (contadorPistas[id] < funciones[id].pistas.length) {
    const pista = funciones[id].pistas[contadorPistas[id]];
    document.getElementById("pista-" + id).innerHTML += `🧩 ${pista}<br>`;
    contadorPistas[id]++;
    puntuacionGlobal = Math.max(0, puntuacionGlobal - 0.10);
    actualizarPuntos(id);
    actualizarPuntuacionGlobal();

    // Activar botón de solución si se han usado 5 pistas
    if (contadorPistas[id] === 5) {
      document.querySelector(`#ejercicio-${id} .btn-solucion`).style.display = "inline-block";
    }
  }
}


function mostrarSolucion(id) {
  if (solucionUsada[id]) return;
  solucionUsada[id] = true;

  const penalizacionPistas = 0.10 * (contadorPistas[id] || 0);
  const penalizacionSolucion = 0.50 - penalizacionPistas;
  puntuacionGlobal = Math.max(0, puntuacionGlobal - penalizacionSolucion);

  const explicacion = funciones[id].explicacion || "Este ejercicio contenía un error que impedía su funcionamiento correcto.";

  document.getElementById("solucion-" + id).innerHTML = `
    <strong>✅ Solución:</strong>
    <pre><code>${funciones[id].solucion}</code></pre>
    <p class="explicacion"><strong>🧠 Explicación:</strong> ${explicacion}</p>
  `;

  actualizarPuntos(id);
  actualizarPuntuacionGlobal();
}


function actualizarPuntuacionGlobal() {
  document.getElementById("puntuacion-global").textContent =
    `Puntuación total: ${puntuacionGlobal.toFixed(2)}`;
}


function actualizarPuntos(id) {
  const base = 0.50;
  const pistasUsadas = contadorPistas[id] || 0;
  const penalizacionPistas = 0.10 * pistasUsadas;
  const penalizacionSolucion = solucionUsada[id] ? (0.50 - penalizacionPistas) : 0;
  const totalPenalizacion = Math.min(0.50, penalizacionPistas + penalizacionSolucion);
  const puntos = Math.max(0, base - totalPenalizacion).toFixed(2);
  document.getElementById("puntos-" + id).textContent = `Puntos: ${puntos}`;
}

function evaluarRespuesta(id) {
  const respuesta = document.getElementById("respuesta-" + id).value;
  const esCorrecto = funciones[id].test(respuesta);
  const mensaje = esCorrecto ? "✅ ¡Correcto!" : "❌ Revisa tu código.";
  document.getElementById("evaluacion-" + id).textContent = mensaje;
}

function iniciarJuego() {
  const input = document.getElementById("nombre");
  nombreJugador = input.value.trim();

  if (nombreJugador === "") {
    alert("Por favor, introduce tu nombre.");
    return;
  }

  document.getElementById("bienvenida").style.display = "none";
  document.getElementById("estado-juego").style.display = "block";
  document.getElementById("saludo-jugador").textContent = `👤 Jugador: ${nombreJugador}`;
  actualizarPuntuacionGlobal();
  crearJuego();
}


crearJuego();