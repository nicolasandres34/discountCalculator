var input = document.getElementById("price");
var finalPrice = document.getElementById("result");
var resultKn = document.getElementById("resultKn");
var otherValue = document.getElementById("otherValue");
var price;
var customValue;

var title = document.getElementById("titleApp");
var insertTitle = document.getElementById("insertTitle");
var valorFinal = document.getElementById("finalPrice");
var otroDescuento = document.getElementById("otherDisc");
var finalPrice

input.addEventListener("input", function() {
  price = this.value;
//   console.log(price);
});

otherValue.addEventListener("input", function() {
  customValue = this.value;
});


function customDiscount(){

  if(customValue == null && price == null || price == null || customValue == null){
    finalPrice.innerHTML ="No has insertado un precio o un porcentaje para calcular.";
    resultKn.innerHTML = "";
  }else{

  var porcentage = parseInt(customValue)/100;

  console.log(porcentage)

  var descuento = price * porcentage;
  var precioFinal = price - descuento;

  console.log(descuento);

  finalPrice.innerHTML = (precioFinal.toFixed(0)) + "CLP";
  clearButton.style.visibility = "visible";
  }
}


function deset(){

  if(price == null || price == 0){
    finalPrice.innerHTML ="No has ingresado ningun valor para calcular :(";
  }else{

    var descuento = price * 0.10;
    var precioFinal = price - descuento;


    finalPrice.innerHTML = (precioFinal.toFixed(0)) + "CLP";
    clearButton.style.visibility = "visible";
  }
  }
function dvaDeset(){
  if(price == null || price == 0){
    finalPrice.innerHTML ="No has ingresado ningun valor para calcular :(";
  }else{

    var descuento = price * 0.20;
    var precioFinal = price - descuento;


    finalPrice.innerHTML = (precioFinal.toFixed(0)) + " CLP";
    clearButton.style.visibility = "visible";
  }
  }
function triDeset(){
  if(price == null || price == 0){
    finalPrice.innerHTML ="No has ingresado ningun valor para calcular :(";
  }else{
    var descuento = price * 0.30;
    var precioFinal = price - descuento;


    finalPrice.innerHTML = (precioFinal.toFixed(0)) + " CLP";
    clearButton.style.visibility = "visible";
  }
  }
function cetrDeset(){
  if(price == null || price == 0){
    finalPrice.innerHTML ="No has ingresado ningun valor para calcular :(";
  }else{
    var descuento = price * 0.40;
    var precioFinal = price - descuento;


    finalPrice.innerHTML = (precioFinal.toFixed(0)) + " CLP";
    clearButton.style.visibility = "visible";
  }
  }
function petDeset(){
  if(price == null || price == 0){
    finalPrice.innerHTML ="No has ingresado ningun valor para calcular :(";
  }else{
    var descuento = price * 0.50;
    var precioFinal = price - descuento;


    finalPrice.innerHTML = (precioFinal.toFixed(0)) + " CLP";
    clearButton.style.visibility = "visible";
  }
  }
function sestDeset(){
  if(price == null || price == 0){
    finalPrice.innerHTML ="No has ingresado ningun valor para calcular :(";
  }else{
    var descuento = price * 0.60;
    var precioFinal = price - descuento;


    finalPrice.innerHTML = (precioFinal.toFixed(0)) + " CLP";
    clearButton.style.visibility = "visible";
  }
  }
function sedamDeset(){
  if(price == null || price == 0){
    finalPrice.innerHTML ="No has ingresado ningun valor para calcular :(";
  }else{
    var descuento = price * 0.70;
    var precioFinal = price - descuento;


    finalPrice.innerHTML = (precioFinal.toFixed(0)) + " CLP";
    clearButton.style.visibility = "visible";
  }
  }
function osamDeset(){
  if(price == null || price == 0){
    finalPrice.innerHTML ="No has ingresado ningun valor para calcular :(";
  }else{
    var descuento = price * 0.80;
    var precioFinal = price - descuento;


    finalPrice.innerHTML = (precioFinal.toFixed(0)) + " CLP";
    clearButton.style.visibility = "visible";
  }
  }


  //Chile APP//

  function engApp(){
    title.innerHTML = "Discount Calculator"
    insertPrice.innerHTML = "Insert the price below:"
    otroDescuento.innerHTML = "Other Discount?"
    valorFinal.innerHTML = "Your product costs:"
    clearButton.innerHTML ="Clear"
  }

  function chileApp(){

    title.innerHTML = "Calculadora de Descuentos"
    insertPrice.innerHTML = "Ingresa el precio abajo:"
    otroDescuento.innerHTML = "Otro porcentaje de descuento?"
    valorFinal.innerHTML = "Tu producto cuesta:"
    clearButton.innerHTML ="Limpiar"

  }






