let num_hijos = 3;

switch (num_hijos) {
  case 1:
    console.log("No le corresponde bonificación");
    break;
  case 2:
  case 3:
  case 4:
    console.log("Bonificación especial del 30%");
    break;
  default:
    if (num_hijos >= 5) {
      console.log("Bonificación especial del 60%");
    } else {
      console.log("Valor no válido");
    }
}
