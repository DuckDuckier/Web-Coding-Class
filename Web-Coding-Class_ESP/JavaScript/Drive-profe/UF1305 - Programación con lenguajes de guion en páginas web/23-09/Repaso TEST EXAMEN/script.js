const respuestasCorrectas = {
  test1: {
  q1: "false",
  q2: "true",
  q3: "false",
  q4: "false",
  q5: "true",
  q6: "false",
  q7: "false",
  q8: "false",
  q9: "true",
  q10: "false"
}

  ,

  test2: {
  q1: "true",
  q2: "false",
  q3: "true",
  q4: "false",
  q5: "true",
  q6: "false",
  q7: "true",
  q8: "false",
  q9: "true",
  q10: "true"
}
  ,
 test3: {
  q1: "true",
  q2: "true",
  q3: "false",
  q4: "false",
  q5: "true",
  q6: "true",
  q7: "true",
  q8: "false",
  q9: "false",
  q10: "true"
}
  ,
  test4: {
    q1: "true",
    q2: "false",
    q3: "true",
    q4: "true",
    q5: "false",
    q6: "true",
    q7: "true",
    q8: "false",
    q9: "true",
    q10: "true"
  }
};

const explicaciones = {
  test1: {
  q1: {
    false: "✅ Correcto: El pseudocódigo no es binario, es una forma de representar algoritmos de forma legible.",
    true: "❌ Incorrecto: El pseudocódigo no es código binario, sino una representación lógica."
  },
  q2: {
    true: "✅ Correcto: 'Mientras' es una estructura de control repetitiva.",
    false: "❌ Incorrecto: 'Mientras' se usa para repetir acciones mientras se cumpla una condición."
  },
  q3: {
    false: "✅ Correcto: Ese pseudocódigo no calcula la edad, solo evalúa si es mayor o igual a 18.",
    true: "❌ Incorrecto: No se está calculando la edad, solo se evalúa una condición."
  },
  q4: {
    false: "✅ Correcto: (2+3)*4 = 20, no 14.",
    true: "❌ Incorrecto: El resultado correcto es 20, no 14."
  },
  q5: {
    true: "✅ Correcto: 5 !== \"5\" devuelve true porque compara tipo y valor.",
    false: "❌ Incorrecto: !== compara tipo y valor, por lo tanto 5 !== \"5\" es true."
  },
  q6: {
    false: "✅ Correcto: frutas[1] devuelve 'banana', no 'manzana'.",
    true: "❌ Incorrecto: frutas[1] es 'banana', no 'manzana'."
  },
  q7: {
    false: "✅ Correcto: --x con x = 3 devuelve 2, no 1.",
    true: "❌ Incorrecto: --x reduce en 1, pero no llega a 1 si x = 3."
  },
  q8: {
    false: "✅ Correcto: 5 === \"5\" devuelve false porque los tipos son distintos.",
    true: "❌ Incorrecto: === compara tipo y valor, y 5 no es igual a \"5\"."
  },
  q9: {
    true: "✅ Correcto: El operador ! se usa para negar valores booleanos.",
    false: "❌ Incorrecto: ! es el operador lógico NOT que niega valores booleanos."
  },
  q10: {
    false: "✅ Correcto: x+=5 con x=2 da como resultado 7, no 5.",
    true: "❌ Incorrecto: x+=5 suma 5 a x, así que el resultado es 7."
  }
}
  ,
  test2: {
  q1: {
    true: "✅ Correcto: Una clase define atributos y métodos que describen el comportamiento de los objetos.",
    false: "❌ Incorrecto: Las clases sí definen atributos y métodos en programación orientada a objetos."
  },
  q2: {
    false: "✅ Correcto: En JavaScript moderno se usa la palabra clave 'class' para definir clases.",
    true: "❌ Incorrecto: 'function' se usa para funciones, no para definir clases."
  },
  q3: {
    true: "✅ Correcto: Un objeto es una instancia de una clase.",
    false: "❌ Incorrecto: El objeto representa una instancia concreta de una clase."
  },
  q4: {
    false: "✅ Correcto: La herencia permite compartir atributos y métodos entre clases.",
    true: "❌ Incorrecto: Las clases pueden heredar tanto atributos como métodos."
  },
  q5: {
    true: "✅ Correcto: 'extends' se usa para heredar una clase en JavaScript.",
    false: "❌ Incorrecto: La palabra clave correcta para heredar es 'extends'."
  },
  q6: {
    false: "✅ Correcto: Los atributos pueden ser heredados si están definidos correctamente.",
    true: "❌ Incorrecto: Los atributos sí pueden heredarse en programación orientada a objetos."
  },
  q7: {
    true: "✅ Correcto: Una clase es una plantilla para crear múltiples objetos con la misma estructura.",
    false: "❌ Incorrecto: Las clases sirven como moldes para crear objetos."
  },
  q8: {
    false: "✅ Correcto: Los atributos privados no pueden accederse directamente desde fuera de la clase.",
    true: "❌ Incorrecto: Solo los atributos públicos pueden accederse directamente."
  },
  q9: {
    true: "✅ Correcto: Un atributo es una variable definida dentro de una clase.",
    false: "❌ Incorrecto: Los atributos son variables internas de la clase."
  },
  q10: {
    true: "✅ Correcto: El encapsulamiento protege los datos internos de una clase.",
    false: "❌ Incorrecto: El encapsulamiento sirve para ocultar y proteger los datos internos."
  }
}
  ,
  test3: {
q1: {
  true: "✅ Correcto: La programación incluye diseño, codificación, depuración y mantenimiento.",
  false: "❌ Incorrecto: La programación abarca todo el proceso, no solo escribir código."
},
q2: {
  true: "✅ Correcto: La lógica de programación es esencial para que el ordenador entienda las instrucciones.",
  false: "❌ Incorrecto: Sin lógica, el ordenador no puede interpretar correctamente el programa."
},
q3: {
  false: "✅ Correcto: Un algoritmo es una secuencia finita y ordenada de instrucciones.",
  true: "❌ Incorrecto: Los algoritmos deben ser finitos y ordenados."
},
q4: {
  false: "✅ Correcto: \"18\" + 18 da \"1818\", no 36, porque se convierte en string.",
  true: "❌ Incorrecto: El resultado es \"1818\", no 36, por conversión implícita a texto."
},
q5: {
  true: "✅ Correcto: Existen scripts del lado del cliente (como JavaScript) y del servidor (como PHP).",
  false: "❌ Incorrecto: Hay dos tipos de guiones según dónde se ejecutan: cliente y servidor."
},
q6: {
  true: "✅ Correcto: Las variables se almacenan en la RAM para ser utilizadas por el programa.",
  false: "❌ Incorrecto: Las variables sí ocupan espacio en la memoria principal (RAM)."
},
q7: {
  true: "✅ Correcto: En JavaScript se pueden usar variables sin declararlas, aunque no es recomendable.",
  false: "❌ Incorrecto: JavaScript permite usar variables sin declararlas, pero puede causar errores."
},
q8: {
  false: "✅ Correcto: document.write muestra contenido, pero no se usa para pedir información.",
  true: "❌ Incorrecto: document.write no solicita datos, solo imprime en pantalla."
},
q9: {
  false: "✅ Correcto: Los elementos del lenguaje de guion incluyen variables, operaciones, etc.",
  true: "❌ Incorrecto: Los lenguajes de guion sí usan esos elementos básicos."
},
q10: {
  true: "✅ Correcto: Cada navegador puede manejar errores de forma distinta.",
  false: "❌ Incorrecto: Los navegadores tienen diferencias en cómo presentan y gestionan errores."
}

  },
  test4: {
  q1: {
    true: "✅ Correcto: Podemos desarrollar cualquier herramienta de edición de texto con las tecnologías adecuadas.",
    false: "❌ Incorrecto: Sí se pueden desarrollar herramientas de edición de texto, incluso muy avanzadas."
  },
  q2: {
    false: "✅ Correcto: Existen editores especializados en scripts como VS Code, Sublime Text, etc.",
    true: "❌ Incorrecto: Hay muchos programas especializados en edición de scripts."
  },
  q3: {
    true: "✅ Correcto: Los errores sintácticos suelen detectarse fácilmente al escribir el código.",
    false: "❌ Incorrecto: Los errores sintácticos son más fáciles de detectar que los de ejecución."
  },
  q4: {
    true: "✅ Correcto: Internet ofrece una gran cantidad de recursos sobre scripts y código fuente.",
    false: "❌ Incorrecto: Hay muchísima información disponible online sobre scripts y ejemplos de código."
  },
  q5: {
    false: "✅ Correcto: El objeto document hace referencia al contenido HTML, no a la ventana.",
    true: "❌ Incorrecto: document no representa la ventana, sino el documento HTML."
  },
  q6: {
    true: "✅ Correcto: En el navegador, todos los objetos globales dependen del objeto window.",
    false: "❌ Incorrecto: En JavaScript, los objetos globales están ligados al objeto window."
  },
  q7: {
    true: "✅ Correcto: El objeto window permite controlar el documento y sus elementos.",
    false: "❌ Incorrecto: window sí permite controlar el documento y sus elementos."
  },
  q8: {
    false: "✅ Correcto: JavaScript tiene muchos eventos de ratón como click, mouseover, etc.",
    true: "❌ Incorrecto: Sí existen eventos de ratón en JavaScript."
  },
  q9: {
    true: "✅ Correcto: Los eventos en HTML suelen comenzar con 'on' seguido del nombre del evento.",
    false: "❌ Incorrecto: Los eventos en JavaScript suelen comenzar con 'on', como onclick, onload, etc."
  },
  q10: {
    true: "✅ Correcto: JavaScript permite manejar teclas con eventos como keydown y keyup.",
    false: "❌ Incorrecto: Sí existen eventos para manejar teclas del teclado."
  }
}
};
function corregirTest(testId) {
  const form = document.getElementById(`form-${testId}`);
  const resultadoDiv = document.getElementById(`resultado-${testId}`);
  const respuestas = respuestasCorrectas[testId];
  const explicacionTest = explicaciones[testId]; // 🔍 Accede al bloque correcto
  let resultadoHTML = "<h3>Resultados:</h3><ul>";
  let aciertos = 0;

  for (let key in respuestas) {
    const seleccionada = form.querySelector(`input[name="${key}"]:checked`);
    if (seleccionada) {
      const valor = seleccionada.value;
      const esCorrecta = valor === respuestas[key];
      const textoExplicacion = explicacionTest?.[key]?.[valor];

      if (esCorrecta) {
        aciertos++;
        resultadoHTML += `<li><strong>Pregunta ${key.slice(1)}:</strong> ${textoExplicacion || "✅ Correcto."}</li>`;
      } else {
        resultadoHTML += `<li class="incorrecto"><strong>Pregunta ${key.slice(1)}:</strong> ${textoExplicacion || "❌ Incorrecto."}</li>`;
      }
    } else {
      resultadoHTML += `<li class="incorrecto"><strong>Pregunta ${key.slice(1)}:</strong> ❌ No respondida.</li>`;
    }
  }

  resultadoHTML += `</ul><p><strong>Total de aciertos:</strong> ${aciertos} / ${Object.keys(respuestas).length}</p>`;
  if (resultadoDiv) {
    resultadoDiv.innerHTML = resultadoHTML;
  }

  // Guardar en localStorage
  localStorage.setItem(`resultado-${testId}`, JSON.stringify({
    aciertos,
    total: Object.keys(respuestas).length,
    fecha: new Date().toLocaleString()
  }));
}

