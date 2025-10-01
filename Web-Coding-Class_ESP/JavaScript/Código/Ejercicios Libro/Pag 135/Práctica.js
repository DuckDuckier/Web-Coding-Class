let total = 0;
let seguirJugando = true;

while (seguirJugando) {
  let carta = parseInt(prompt("Introduce un número del 1 al 10 (o 0 para plantarte):"));

  if (carta === 0) {
    seguirJugando = false;
    alert(`Te plantaste con un total de ${total}.`);
    break;
  }

  if (carta < 1 || carta > 10 || isNaN(carta)) {
    alert("Número inválido. Introduce un número del 1 al 10.");
    continue;
  }

  let valorCarta = (carta >= 8) ? 0.5 : carta;

  total += valorCarta;
  alert(`Has sacado un ${carta} (vale ${valorCarta}). Total acumulado: ${total}`);

  if (total > 7.5) {
    alert("¡Te has pasado de 7.5! Has perdido.");
    seguirJugando = false;
  }
}