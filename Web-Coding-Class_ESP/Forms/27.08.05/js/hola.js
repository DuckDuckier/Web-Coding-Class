function validar(formulario){
    if(formulario.nombre.value != ''){
        alert('La información es correcta.');
        return true;
    } else {
        alert('La información es incorrecta');
        return false;
    }}