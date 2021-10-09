// get element for addition
var total1 =document.getElementById("total1");
function addition(){
    var x=300;
    var y=200;
    var showdata= x + y;
    total1.innerHTML = showdata;
}
// get element for subtraction
var total2 =document.getElementById("total2");
function subtraction(){
    var x=300;
    var y=200;
    var showdata= x - y;
    total2.innerHTML = showdata;
}
// get element for multiplication
var total3 =document.getElementById("total3");
function multiplication(){
    var x=300;
    var y=200;
    var showdata= x * y;
    total3.innerHTML = showdata;
}
// get element for division
var total4 =document.getElementById("total4");
function division(){
    var x=300;
    var y=200;
    var showdata= x / y;
    total4.innerHTML =Math.round(showdata);
}
// get element for modulus
var total5 =document.getElementById("total5");
function modulus(){
    var x=300;
    var y=200;
    var showdata= x % y;
    total5.innerHTML = showdata;
}