//var es global se puede usar en todo el codigo
//let se usa solo en ciertos fragmentos del codigo
//const ya no se puede cambiar su valor o reagsignarlo


var variable1 = "Soy la variable 1";
let variable2 = "Soy la variable 2";
const variableConstante = "12342554";


//ejemplo de variable
function varTest(){
    let variable3 = "Soy la variable 3";
    var x = 31;
    if (true){
        var x = 71;
        console.log(x);
    }
    console.log(x);
}
console.log(variable3);

//ejemplo de constante
const variable4 =variable2;
console.log(varable2);
variable2 = 10;
console.log(varable2);

//Funcion de flecha
const nuevaFuncion = () => {
    let y = 20;
    if (true){
        let y = 50;
        console.log(y);
    }
    console.log(y);
}
nuevaFuncion();



//Template de string

const nombre = "Andrea";
const apellido = "Ferrer";

//imprimir con concatenacion
console.log("Hola mi nombre es " + nombre + "mi apellido es " + apellido);

//imprimir on template de string
console.log(`Hola mi nombre es ${nombre} y mi apellido es ${apellido}`);

//operador spread
const arreglo = [1,2,3,4,5];
console.log(arreglo);