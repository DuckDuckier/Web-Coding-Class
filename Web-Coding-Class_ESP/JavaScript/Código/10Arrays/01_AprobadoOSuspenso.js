function media(...notas){
  let suma = 0;
  for (let fantasia = 0; fantasia < notas.length; fantasia++){
    suma += notas[fantasia];
  }

  let average = suma/notas.length
  
  if (average >70) {
    console.log("Aprobado")
  }else{
    console.log("Suspenso")
  }
}

media(70, 70, 70, 70);
media(30, 10, 35, 30);