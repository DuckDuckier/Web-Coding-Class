// script.js
const answers = {
  q1: "true",
  q2: "false",
  q3: "true",
  q4: "false",
  q5: "true",
  q6: "true",
  q7: "true",
  q8: "false",
  q9: "true",
  q10: "true"
};

const explanations = {
  q1: {
    true: "✅ Correcto: autocomplete permite sugerencias previas.",
    false: "❌ Incorrecto: autocomplete sí permite sugerencias automáticas."
  },
  q2: {
    true: "❌ Incorrecto: los campos deshabilitados no se envían.",
    false: "✅ Correcto: los campos con 'disabled' no se incluyen en el envío."
  },
  q3: {
    true: "✅ Correcto: puedes tener múltiples botones submit en un formulario.",
    false: "❌ Incorrecto: es válido tener más de un botón de envío."
  },
  q4: {
    true: "❌ Incorrecto: onblur se activa al perder el foco, no al presionar un botón.",
    false: "✅ Correcto: onblur ocurre cuando el campo pierde el foco."
  },
  q5: {
    true: "✅ Correcto: el atributo name es clave para enviar datos.",
    false: "❌ Incorrecto: sin name, el campo no se envía."
  },
  q6: {
    true: "✅ Correcto: reset() borra todos los datos del formulario.",
    false: "❌ Incorrecto: reset() sí borra los datos ingresados."
  },
  q7: {
    true: "✅ Correcto: readonly impide editar pero permite copiar.",
    false: "❌ Incorrecto: readonly no bloquea la copia del contenido."
  },
  q8: {
    true: "❌ Incorrecto: action define la URL de destino, no el tipo de datos.",
    false: "✅ Correcto: action indica a dónde se envían los datos, no su tipo."
  },
  q9: {
    true: "✅ Correcto: oninput se activa con cada cambio en el campo.",
    false: "❌ Incorrecto: oninput sí detecta cambios en tiempo real."
  },
  q10: {
    true: "✅ Correcto: enctype='multipart/form-data' se usa para enviar archivos.",
    false: "❌ Incorrecto: este atributo es necesario para subir archivos."
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
