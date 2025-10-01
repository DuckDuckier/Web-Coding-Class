function contarNacionalidades(array) {
  const contador = {};

  array.forEach(nacionalidad => {
    if (contador[nacionalidad]) {
      contador[nacionalidad]++;
    } else {
      contador[nacionalidad] = 1;
    }
  });

  return contador;
}

const nacionalidades = [
  "mexicana", "argentina", "chilena", "mexicana",
  "peruana", "chilena", "chilena", "argentina"
];

const resultado = contarNacionalidades(nacionalidades);

console.log(resultado);