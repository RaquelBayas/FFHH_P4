val date = '2017-06-01';

function saveDate(){
  date = document.getElementById("fecha").value;
  alert("He recogido la fecha");
}

function getDate(){
  return date;
  alert("He enviado la fecha");
}
