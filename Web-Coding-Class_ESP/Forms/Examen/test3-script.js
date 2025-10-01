// script.js
const answers = {
  q21: "false",
  q22: "true",
  q23: "false",
  q24: "true",
  q25: "false",
  q26: "true",
  q27: "false",
  q28: "true",
  q29: "true",
  q30: "false"
};

const explanations = {
  q21: {
    true: "❌ Incorrecto: action define la URL de destino, no el tipo de datos.",
    false: "✅ Correcto: action indica a dónde se envían los datos, no su tipo."
  },
  q22: {
    true: "✅ Correcto: input puede tener múltiples tipos como text, password, button, etc.",
    false: "❌ Incorrecto: input admite varios tipos de entrada."
  },
  q23: {
    true: "❌ Incorrecto: method='get' envía los datos en la URL, no los oculta.",
    false: "✅ Correcto: los datos se muestran en la URL con method='get'."
  },
  q24: {
    true: "✅ Correcto: required obliga al usuario a completar el campo.",
    false: "❌ Incorrecto: required sí impide enviar el formulario si el campo está vacío."
  },
  q25: {
    true: "❌ Incorrecto: textarea se usa para texto multilínea.",
    false: "✅ Correcto: textarea permite escribir varias líneas de texto."
  },
  q26: {
    true: "✅ Correcto: label mejora la accesibilidad al vincular texto con campos.",
    false: "❌ Incorrecto: usar label es clave para accesibilidad."
  },
  q27: {
    true: "❌ Incorrecto: name sigue siendo necesario para enviar datos correctamente.",
    false: "✅ Correcto: sin name, el campo no se envía aunque uses JavaScript."
  },
  q28: {
    true: "✅ Correcto: input type='email' valida automáticamente el formato de correo.",
    false: "❌ Incorrecto: este tipo de input sí valida el formato de email."
  },
  q29: {
    true: "✅ Correcto: ambos elementos crean botones de envío.",
    false: "❌ Incorrecto: tanto input como button pueden ser botones submit."
  },
  q30: {
    true: "❌ Incorrecto: readonly impide modificar pero permite copiar.",
    false: "✅ Correcto: el contenido readonly puede copiarse aunque no se edite."
  }
};

function checkAnswers() {
  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    const feedback = document.getElementById(`f${key.slice(1)}`);
    if (selected) {
      const isCorrect = selected.value === answers[key];
      feedback.textContent = explanations[key][selected.value];
      feedback.className = isCorrect ? "feedback correct" : "feedback incorrect";
    } else {
      feedback.textContent = "⚠️ No has respondido esta pregunta.";
      feedback.className = "feedback incorrect";
    }
  }
}
