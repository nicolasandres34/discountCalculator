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
    finalPrice.innerHTML ="You did not insert a percentage or ammount to calculate.";
    resultKn.innerHTML = "";
  }else{

  var porcentage = parseInt(customValue)/100;

  console.log(porcentage)

  var descuento = price * porcentage;
  var precioFinal = price - descuento;
  var enKunas = precioFinal * 7.53;

  console.log(descuento);

  finalPrice.innerHTML = (precioFinal.toFixed(2)) + "€";
  resultKn.innerHTML = (enKunas.toFixed(2)) + "KN"
  }
}


function deset(){

  if(price == null || price == 0){
    finalPrice.innerHTML ="There is no price to calculate :(";
  }else{

    var descuento = price * 0.10;
    var precioFinal = price - descuento;
    var enKunas = precioFinal * 7.53;


    finalPrice.innerHTML = (precioFinal.toFixed(2)) + "€";
    resultKn.innerHTML = (enKunas.toFixed(2)) + "KN"
  }
  }
function dvaDeset(){
  if(price == null || price == 0){
    finalPrice.innerHTML ="There is no price to calculate :(";
  }else{

    var descuento = price * 0.20;
    var precioFinal = price - descuento;
    var enKunas = precioFinal * 7.53;


    finalPrice.innerHTML = (precioFinal.toFixed(2)) + "€";
    resultKn.innerHTML = (enKunas.toFixed(2)) + "KN"
  }
  }
function triDeset(){
  if(price == null || price == 0){
    finalPrice.innerHTML ="There is no price to calculate :(";
  }else{
    var descuento = price * 0.30;
    var precioFinal = price - descuento;
    var enKunas = precioFinal * 7.53;


    finalPrice.innerHTML = (precioFinal.toFixed(2)) + "€";
    resultKn.innerHTML = (enKunas.toFixed(2)) + "KN"
  }
  }
function cetrDeset(){
  if(price == null || price == 0){
    finalPrice.innerHTML ="There is no price to calculate :(";
  }else{
    var descuento = price * 0.40;
    var precioFinal = price - descuento;
    var enKunas = precioFinal * 7.53;


    finalPrice.innerHTML = (precioFinal.toFixed(2)) + "€";
    resultKn.innerHTML = (enKunas.toFixed(2)) + "KN"
  }
  }
function petDeset(){
  if(price == null || price == 0){
    finalPrice.innerHTML ="There is no price to calculate :(";
  }else{
    var descuento = price * 0.50;
    var precioFinal = price - descuento;
    var enKunas = precioFinal * 7.53;


    finalPrice.innerHTML = (precioFinal.toFixed(2)) + "€";
    resultKn.innerHTML = (enKunas.toFixed(2)) + "KN"
  }
  }
function sestDeset(){
  if(price == null || price == 0){
    finalPrice.innerHTML ="There is no price to calculate :(";
  }else{
    var descuento = price * 0.60;
    var precioFinal = price - descuento;
    var enKunas = precioFinal * 7.53;


    finalPrice.innerHTML = (precioFinal.toFixed(2)) + "€";
    resultKn.innerHTML = (enKunas.toFixed(2)) + "KN"
  }
  }
function sedamDeset(){
  if(price == null || price == 0){
    finalPrice.innerHTML ="There is no price to calculate :(";
  }else{
    var descuento = price * 0.70;
    var precioFinal = price - descuento;
    var enKunas = precioFinal * 7.53;


    finalPrice.innerHTML = (precioFinal.toFixed(2)) + "€";
    resultKn.innerHTML = (enKunas.toFixed(2)) + "KN"
  }
  }
function osamDeset(){
  if(price == null || price == 0){
    finalPrice.innerHTML ="There is no price to calculate :(";
  }else{
    var descuento = price * 0.80;
    var precioFinal = price - descuento;
    var enKunas = precioFinal * 7.53;


    finalPrice.innerHTML = (precioFinal.toFixed(2)) + "€";
    resultKn.innerHTML = (enKunas.toFixed(2)) + "KN"
  }
  }


  //Chile APP//

  function engApp(){
    title.innerHTML = "Discount Calculator"
    insertPrice.innerHTML = "Insert the price below:"
    otroDescuento.innerHTML = "Other Discount?"
    valorFinal.innerHTML = "Your product costs:"
  }

  function chileApp(){

    title.innerHTML = "Calculadora de Descuentos"
    insertPrice.innerHTML = "Ingresa el precio abajo:"
    otroDescuento.innerHTML = "Otro porcentaje de descuento?"
    valorFinal.innerHTML = "Tu producto cuesta:"

  }

  function croApp(){

    title.innerHTML = "Kalkulator Popusta"
    insertPrice.innerHTML = "Unesite cijenu ispod:"
    otroDescuento.innerHTML = "Drugi popust?"
    valorFinal.innerHTML = "konačna cijena:"

  }






