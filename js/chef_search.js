function search_chef(){
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
