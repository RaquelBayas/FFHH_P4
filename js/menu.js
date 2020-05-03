//$("list_cart").hide();
function add_to_card(i){
    //dishes.childNodes[1];
    //var img = $("div.dishes").find("img").src="";
    var c = dishes.children;
    var txt = "";
    var iM

//    for(i=0;i<c.length;i++){
  //    txt = txt+c[i].tagName+" ";
    //}

    //alert(c[0].children[0].children.length);

    //get the image and the dish name from selected element

    var img_dish = c[i].children[0].children[0].src;
    var dish_name = c[i].children[0].children[1].children[0].children[0].innerText;

    if(selected.style.display == "none"){
      selected.style.display = "block";
      list_cart.children[0].children[0].children[0].children[0].src = img_dish;
      list_cart.children[0].children[0].children[1].children[0].innerText = dish_name;


    }else{
      var already_in = false;
      for (var i = 0; i<list_cart.children.length; i++){
        if(list_cart.children[i].children[0].children[1].children[0].innerText==dish_name)
          already_in = true;
      }
      if(!already_in){
        var copy = list_cart.children[0].cloneNode(true);
        copy.children[0].children[0].children[0].src = img_dish;
        copy.children[0].children[1].children[0].innerText = dish_name;
        copy.children[0].children[2].children[0].id = randomStr();
        list_cart.appendChild(copy);
      }else{
        alert("Este plato ya fue seleccionado");
      }
    }
}


function delete_from_cart(id){
  if(list_cart.children.length!=1){
    var element = document.getElementById(id);
    list_cart.removeChild(element.parentElement.parentElement.parentElement);
  }else{
    selected.style.display = "none";
  }
}


function randomStr() {
    var len = 5;
    var arr = "0123456789qwertyuiopasdfghjklzxcvbnm"
    var ans = '';
    for (var i = len; i > 0; i--) {
        ans +=
          arr[Math.floor(Math.random() * arr.length)];
    }
    return ans;
}

function reservar(){
  if(selected.style.display == "none")
    alert("Por favor, seleccione los platos que desea antes de realizar la reserva")
  else
    location.href="reserva.html";
}

function search(){
  var len = search_bar.value.length;
  var c = dishes.children;
  if(len!=0){
    for (var i = 0; i<c.length;i++){
      if(c[i].children[0].children[1].children[0].children[0].innerText.substring(0,len).toUpperCase() != search_bar.value.toUpperCase())
        c[i].style.display="none";
      else
        c[i].style.display="block";
    }
  }else{
    for (var i = 0; i<c.length;i++){
      c[i].style.display="block";
    }
  }
}
