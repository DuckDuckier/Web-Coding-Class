const form = document.getElementById('registroForm');
const mensaje = document.getElementById('mensaje');
const resumenDatos = document.getElementById('resumenDatos');
const borrarDatosBtn = document.getElementById('borrarDatos');

// Cargar datos previos del localStorage al iniciar
document.addEventListener('DOMContentLoaded', () => {
  mostrarDatos();
});

// Validación del formulario
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = form.nombre.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value.trim();
  const confirmPassword = form.confirmPassword.value.trim();
  const fechaNacimiento = form.fechaNacimiento.value;
  const genero = form.genero.value;
  const pais = form.pais.value;
  const terminos = form.terminos.checked;

  if (!nombre || !email || !password || !confirmPassword || !fechaNacimiento || !genero || !pais) {
    mostrarMensaje('Todos los campos son obligatorios', 'error');
    return;
  }

  if (!validarEmail(email)) {
    mostrarMensaje('El correo electrónico no es válido', 'error');
    return;
  }

  if (password !== confirmPassword) {
    mostrarMensaje('Las contraseñas no coinciden', 'error');
    return;
  }

  if (!terminos) {
    mostrarMensaje('Debes aceptar los términos y condiciones', 'error');
    return;
  }

  // Guardar en localStorage
  const datos = { nombre, email, fechaNacimiento, genero, pais };
  localStorage.setItem('datosUsuario', JSON.stringify(datos));

  mostrarMensaje('Formulario enviado correctamente', 'exito');
  mostrarDatos();
  form.reset();
});

form.addEventListener('reset', () => {
  mensaje.textContent = '';
  mensaje.className = '';
});

// Función para mostrar mensaje
function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.className = tipo;
}

// Validar email
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Mostrar resumen de datos guardados
function mostrarDatos() {
  const datos = JSON.parse(localStorage.getItem('datosUsuario'));
  if (datos) {
    resumenDatos.innerHTML = `
      <p><strong>Nombre:</strong> ${datos.nombre}</p>
      <p><strong>Email:</strong> ${datos.email}</p>
      <p><strong>Fecha de Nacimiento:</strong> ${datos.fechaNacimiento}</p>
      <p><strong>Género:</strong> ${datos.genero}</p>
      <p><strong>País:</strong> ${datos.pais}</p>
    `;
  } else {
    resumenDatos.innerHTML = '<p>No hay datos almacenados.</p>';
  }
}

// Borrar datos almacenados
borrarDatosBtn.addEventListener('click', () => {
  localStorage.removeItem('datosUsuario');
  mostrarDatos();
  mostrarMensaje('Datos borrados', 'exito');
});
