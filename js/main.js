var boton = document.getElementsByClassName("numero");

for (var x=0 ; x<boton.length ; x++){
  boton[x].addEventListener("click",mostrar);
}
var bomba= document.getElementsByClassName("bomba");
for(var y=0 ; y<bomba.length ; y++){
  bomba[y].addEventListener("click", mostrar_bomba);

}

var color = document.getElementsByClassName("color");
for (var z = 0 ; z < color.length ; z++){
  color[z].addEventListener("click",cambiaColor);
}
function mostrar(){
this.innerText = "1";
}

function mostrar_bomba(){
  this.innerHTML= '<img src="img/imgBomba.jpeg" >'
}

function cambiaColor(){
  this.color.style.backgroundColor
  elemento.style.backgroundColor="#f34";
}
