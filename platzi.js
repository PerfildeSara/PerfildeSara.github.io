var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var cerdoX = 10;
var cerdoY = 10;
var numeros = 0;


var fondo = {
  url: "tile.png",
  cargaOk: false
};

var vaca = {
  url: "vaca.png",
  cargaOk: false
};

var pollo = {
  url: "pollo.png",
  cargaOk:false,
  coger1: false,
  coger2: false,
  coger3: false,
  coger4: false,
  coger5: false,
  coger6: false,
  coger7: false,
  coger8: false,
};

var cerdo = {
  url:"cerdo.png",
  cargaOk: false
};

var uno = {
  url: "1.png",
};

var dos = {
  url: "2.png",
};

var tres = {
  url: "3.png",
};
var cuatro = {
  url: "4.png",
};

var cinco = {
  url: "5.png",
};

var seis = {
  url: "6.png",
};

var siete = {
  url: "7.png",
};

var ocho = {
  url: "8.png",
};

var ganaste = {
  url:"ganaste.png",
};
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

uno.imagen = new Image();
uno.imagen.src = uno.url;

dos.imagen = new Image();
dos.imagen.src = dos.url;

tres.imagen = new Image();
tres.imagen.src = tres.url;

cuatro.imagen = new Image();
cuatro.imagen.src = cuatro.url;

cinco.imagen = new Image();
cinco.imagen.src = cinco.url;

seis.imagen = new Image();
seis.imagen.src = seis.url;

siete.imagen = new Image();
siete.imagen.src = siete.url;

ocho.imagen = new Image();
ocho.imagen.src = ocho .url;

ganaste.imagen = new Image();
ganaste.imagen.src = ganaste .url;


function cargarFondo(){
  fondo.cargaOk = true;
  dibujar();
  console.log("fondo");
}
function cargarVacas(){
  vaca.cargaOk = true;
  dibujar();
  console.log("vaca");
}
function cargarPollos(){
  pollo.cargaOk = true;
  dibujar();
  console.log("pollo.cargaOk " + pollo.cargaOk);
}
function cargarCerdos(){
  cerdo.cargaOk = true;
  dibujar();
  console.log("cerdo");
}


function dibujar(){
  //Fondo
  if(fondo.cargaOk){
    papel.drawImage(fondo.imagen, 0, 0);
  }
  //Vacas voladoras
  if(vaca.cargaOk){
    for(var  v=0; v<15; v++){
      var x = aleatorio (0, 460);
      var y = aleatorio (0, 460);
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  // El cerdo atrapa pollos
  if (cerdo.cargaOk){
    papel.drawImage(cerdo.imagen, cerdoX, cerdoY);
  }
  if((cerdoX == 180) && (cerdoY == 300)){
    pollo.coger1 = true;
      numeros = numeros + 1;

  }
  if((cerdoX == 180) && (cerdoY == 400)){
    pollo.coger2 = true;
    numeros = numeros + 1;

  }
  if((cerdoX == 80) && (cerdoY == 200)){
    pollo.coger3 = true;
    numeros = numeros + 1;

  }
  if((cerdoX == 180) && (cerdoY == 200)){
    pollo.coger4 = true;
    numeros = numeros + 1;

  }
  if((cerdoX == 50) && (cerdoY == 400)){
    pollo.coger5 = true;
    numeros = numeros + 1;

  }
  if((cerdoX == 150) && (cerdoY == 50)){
    pollo.coger6 = true;
    numeros = numeros + 1;

  }
  if((cerdoX == 50) && (cerdoY == 300)){
    pollo.coger7 = true;
    numeros = numeros + 1;

  }
  if((cerdoX == 200) && (cerdoY == 440)){
    pollo.coger8 = true;
    numeros = numeros + 1;

  }
  //Pollos que temen por sus vidas
  if((pollo.cargaOk == true) && (pollo.coger1 == false)){
     papel.drawImage(pollo.imagen, 180, 300);
     console.log("pollo 1 " + pollo.coger1);
  }
  if((pollo.cargaOk == true) && (pollo.coger2 == false)){
      papel.drawImage(pollo.imagen, 180, 400);
      console.log("pollo 2 " + pollo.coger2);
  }
  if((pollo.cargaOk == true) && (pollo.coger3 == false)){
      papel.drawImage(pollo.imagen, 80, 200);
      console.log("pollo 3 " + pollo.coger3);
  }
  if((pollo.cargaOk == true) && (pollo.coger4 == false)){
      papel.drawImage(pollo.imagen, 180, 200);
      console.log("pollo 4 " + pollo.coger4);
  }
  if((pollo.cargaOk == true) && (pollo.coger5 == false)){
      papel.drawImage(pollo.imagen, 50, 400);
      console.log("pollo 5 " + pollo.coger5);
  }
  if((pollo.cargaOk == true) && (pollo.coger6 == false)){
      papel.drawImage(pollo.imagen, 150, 50);
      console.log("pollo 6 " + pollo.coger6);
  }
  if((pollo.cargaOk == true) && (pollo.coger7 == false)){
      papel.drawImage(pollo.imagen, 50, 300);
      console.log("pollo 7 " + pollo.coger7);
  }
  if((pollo.cargaOk == true) && (pollo.coger8 == false)){
      papel.drawImage(pollo.imagen, 200, 440);
      console.log("pollo 8 " + pollo.coger8);
  }
  cambiarNumero();
}

function dibujarTeclado(evento){
    switch(evento.keyCode){
      case teclas.UP:
      cerdoY = cerdoY - 10;
      console.log("cerdoY " + cerdoY);
      dibujar();
      break;

      case teclas.DOWN:
      cerdoY = cerdoY + 10;
      console.log("cerdoY " + cerdoY);
      dibujar();
      break;

      case teclas.LEFT:
      cerdoX = cerdoX - 10;
      console.log("cerdoX " + cerdoX);
      dibujar();
      break;

      case teclas.RIGHT:
      cerdoX = cerdoX + 10;
      console.log("cerdoX " + cerdoX);
      dibujar();
      break;
    }
}

function aleatorio (min, max){
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}


function cambiarNumero (){
  if (numeros == 1) {
    papel.drawImage(uno.imagen, 400, 400);
    console.log("aparece numero uno")
  }
  if (numeros == 2){
  papel.drawImage(dos.imagen, 400, 400);
  }
  if (numeros == 3){
  papel.drawImage(tres.imagen, 400, 400);
  }
  if (numeros == 4){
  papel.drawImage(cuatro.imagen, 400, 400);
  }
  if (numeros == 5){
  papel.drawImage(cinco.imagen, 400, 400);
  }
  if (numeros == 6){
  papel.drawImage(seis.imagen, 400, 400);
  }
  if (numeros == 7){
  papel.drawImage(siete.imagen, 400, 400);
  }
  if (numeros == 8){
  papel.drawImage(ocho.imagen, 400, 400);
  papel.drawImage(ganaste.imagen, 170, 170);
  }
}
