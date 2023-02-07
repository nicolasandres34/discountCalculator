var input = document.getElementById("price");
var finalPrice = document.getElementById("result");
var resultKn = document.getElementById("resultKn");
var otherValue = document.getElementById("otherValue");
var price;
var customValue;

input.addEventListener("input", function() {
  price = this.value;
//   console.log(price);
});

otherValue.addEventListener("input", function() {
  customValue = this.value;
});


function customDiscount(){

  if(customValue == null){
    finalPrice.innerHTML ="You did not insert a percentage";
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

