var boton = document.getElementsByClassName("numero");

for (var x=0 ; x<boton.length ; x++){
  boton[x].addEventListener("click",mostrar);
}

var bomba= document.getElementsByClassName("bomba");

  for(var y=0 ; y<bomba.length ; y++){
    bomba[y].addEventListener("click",mostrar_bomba);
}

var color = document.getElementsByClassName("color");
for (var z = 0 ; z < color.length ; z++){
  color[z].addEventListener("click",cambiaColor);
}
function mostrar(){
this.innerText = "1";
}

function mostrar_bomba(){
  alert("Ya perdiste x.x");

  for(var i= 0 ; i< bomba.length ; i++){
    bomba[i].innerHTML= '<img src="img/imgBomba.jpeg" >'

  }
  remueveEventos();

}

function cambiaColor(){
  this.style.backgroundColor="#f34";
}
function remueveEventos(){

  for ( var i = 0 ; i< boton.length ; i++ )
  {
    //removeEventListener
    color[i].removeEventListener("click", cambiaColor);
    boton[i].removeEventListener("click",mostrar);
  }
}
