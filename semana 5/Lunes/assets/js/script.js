/*Acceder a un documento
document.getElementsByClassName(".parrafo")[0].innerHTML = "Hola soy un texto diferente";
*/

var parrafos = document.getElementsByClassName("parrafo");
console.log(parrafos);

document.getElementsByClassName("parrafo")[0].innerHTML = "Parrafo cambiado dinamicamente";
document.getElementById("parrafo2").innerHTML = "Soy el parrafo 2"


//Otro ejemplor, con query selector si se coloca el punto en el nombre de la clase, el query selector solo selecciona el primer elemento de la clase
document.querySelector(".parrafo").textContent = "Nuevo texto de parrfo ";
//querySelectorAll retorna un arreglo entonces hay que poner [0], [1], [2], etc.
document.querySelectorAll(".parrafo")[1].textContent = "Otro texto de parrafo";
//Si pones un punto . haces referencia a una clase y con el # haces referencia al id.
document.querySelector("#parrafo2").textContent = "Texto con simbolo de gato";


var parrafo1 = document.querySelectorAll(".parrafo")[0];
var parrafo2 = document.querySelector("#parrafo2");
//Pruebas en DOM
console.log(document.head);
console.log(document.body);
console.log(parrafo1);
console.log(parrafo2);