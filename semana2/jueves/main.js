/*Operadores aritmeticos
var numero1 = parseInt(prompt('Escirbe un numero'));
var numero2 = parseInt(prompt("Escribe otro numero"));
console.log (numero1 + numero2);
console.log (numero1 - numero2);
console.log (numero1 * numero2);
console.log (numero1 / numero2);
console.log (numero1 % numero2);*/
//Condicionales
/*var edad =parseInt(prompt('Ingresa tu edad'));
if (edad >= 18 && edad < 29){
    alert ('Felicidades, fuiste aceptado en Generation Mexico');
} else {
    alert('Lo sentimos, no cumples con los requisitos de ingreso')
}*/
//Ejercicio final Nomina
var isr = 0.3;
var imss = 0.6;
var porcentajes = isr + imss;
var dia = parseInt(prompt("Cuanto ganas al dia?"));
var quincena = 15;
var mes = 30;

console.log ('Tu sueldo bruto a la quincena es ' + dia * quincena);
console.log ('Tu sueldo bruto al mes es ' + dia * mes);
console.log ('Tu sueldo neto a la quincena es ' + dia * quincena * porcentajes);
console.log ('Tu sueldo neto al mes es ' + dia * mes * porcentajes);

