function valida() {
  var val = true;
  if(nombre.value.length == 0)
  {
    val = false;
  }

  if(apellidos.value.length == 0)
  {
    val = false;
  }

  if(email.value.length == 0)
  {
    val = false;
  }
  if(telefono.value.length == 0)
  {
    val = false;
  }
  if(num_participantes.value.length == 0)
  {
    val = false;
  }


  if(val == false){
    window.alert("No has rellenado todos los campos obligatorios. ")
  }
  if( val == true){
    window.alert("Reserva realizada correctamente. ")
    location.href = "index.html";

  }

  return val;
}
