// script.js
const answers = {
  q11: "true",
  q12: "true",
  q13: "false",
  q14: "true",
  q15: "true",
  q16: "true",
  q17: "false",
  q18: "true",
  q19: "false",
  q20: "true"
};

const explanations = {
  q11: {
    true: "✅ Correcto: pattern define una expresión regular para validar campos.",
    false: "❌ Incorrecto: pattern sí se usa para validar con expresiones regulares."
  },
  q12: {
    true: "✅ Correcto: la expresión debe coincidir con todo el valor del campo.",
    false: "❌ Incorrecto: no basta con que coincida una parte, debe coincidir todo."
  },
  q13: {
    true: "❌ Incorrecto: pattern no funciona en campos de tipo number.",
    false: "✅ Correcto: pattern no se aplica en inputs de tipo number."
  },
  q14: {
    true: "✅ Correcto: title permite mostrar un mensaje personalizado si el pattern falla.",
    false: "❌ Incorrecto: puedes usar title para mostrar mensajes personalizados."
  },
  q15: {
    true: "✅ Correcto: si el navegador no soporta HTML5, pattern se ignora.",
    false: "❌ Incorrecto: pattern depende del soporte HTML5 del navegador."
  },
  q16: {
    true: "✅ Correcto: si el valor no coincide con el pattern, el formulario no se envía.",
    false: "❌ Incorrecto: el formulario se bloquea si el pattern no se cumple."
  },
  q17: {
    true: "❌ Incorrecto: para validar correos se debe usar type='email'.",
    false: "✅ Correcto: pattern no reemplaza la validación automática de type='email'."
  },
  q18: {
    true: "✅ Correcto: puedes usar pattern para validar contraseñas con requisitos específicos.",
    false: "❌ Incorrecto: pattern permite validar contraseñas con reglas complejas."
  },
  q19: {
    true: "❌ Incorrecto: pattern no reemplaza toda la validación que puede hacer JavaScript.",
    false: "✅ Correcto: JavaScript sigue siendo útil para validaciones más complejas."
  },
  q20: {
    true: "✅ Correcto: el elemento <form> se usa para crear formularios.",
    false: "❌ Incorrecto: <form> es el elemento base para formularios en HTML."
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
