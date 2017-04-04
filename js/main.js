//
var boton = document.getElementsByClassName("numero");
for (var x=0 ; x<boton.length ; x++){
  boton[x].addEventListener("click",mostrar);

}
var bomba= document.getElementById("bomba");
bomba.addEventListener("click", mostrar_bomba);

function mostrar(){
  //var valor= document.getElementById("caja");
  //var x = document.getElementsByClassName("example");
    //x[0].innerHTML = "Hello World!"

  this.innerText = "1";
}

function mostrar_bomba(){

  var imagen = document.getElementById("bomba");
  imagen.innerHTML= '<img src="img/imgBomba.jpeg" >'


}
function mostrar_mina() {
  var img = document.getElementById("mina");
  img.innerHTML = '<img src= "imagenes/mina.gif"/>';
}

function cambiaColor(){
  elemento.style.backgroundColor="#f34";
}
