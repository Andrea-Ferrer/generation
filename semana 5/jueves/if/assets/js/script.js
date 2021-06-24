//Programa que pida dos numeros y nos diga cual es el mayor, el menor y si son iguales.
//Plus: Si los numeros no son un number o son menores o iguales a cero nos vuelva a pedir 

var numero1 = parseInt(prompt("Introduce un número"));
var numero2 = parseInt(prompt("Introduce otro numero"));

//condicionales
if (numero1 > numero2){
    alert(numero1 + " es mayor que " + numero2);
        console.log(numero1 + "es mayor que " + numero2);
    document.write(`<h1> El ${numero1} es mayor que ${numero2}</h1>`);
}else if (numero1 < numero2){
    alert(numero1 + " es menor que " + numero2);
    document.write(`<h1> El ${numero1} es menor que ${numero2}</h1>`);
}else if(numero1 == numero2){
    alert(numero1 + " es igual a " + numero2);
    document.write(`<h1> El ${numero1} es igual a ${numero2}</h1>`);
};

//plus