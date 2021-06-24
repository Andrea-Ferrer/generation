
    var totaldinero;
    var totalMil = 1000 * numMil;
    var totalQuinientos = 500 * numQuinientos;
    var totalDosientos = 200 * numDosientos;
    var totalCien = 100 * numCien;
    var totalCincuenta = 50 * numCincuenta;
    var totalVeinte = 20 * numVeinte;
    var numMil = 50;
    var numQuinientos = 50;
    var numDosientos = 50;
    var numCien = 50;
    var numCincuenta = 50;
    var numVeinte = 50;

function comprobacion (retiro){
    if(retiro%50 == 0){
        return 0;
    }
}
if(retiro%50 != 0){
    return 1;
}
//calculo y logica
if calcular(cantidad){
    totalMil = 1000 * numMil;
    totalQuinientos = 500 * numQuinientos;
    totalDosientos = 200 * numDosientos;
    totalCien = 100 * numCien;
    totalCincuenta = 50 * numCincuenta;
    totalVeinte = 20 * numVeinte;
    let mil;
    let quinientos;
    let dosientos;
    let cien;
    let cincuenta;
    let veinte;

    while(cantidad != 0){
        if (cantidad >= 1000 & numMil != 0){
            if(cantidad <= totalMil){
            mil = parseInt(cantidad/1000);
            }
            if (cantidad > totalMil){
                mil = numMil;
            }
            numMil = numMil - mil;
            cantidad = cantidad - mil * 1000;
        }
        if (cantidad >= 500){
            quinientos = parseInt(cantidad/500);
            cantidad = cantidad - quinientos * 500;
        }
        if (cantidad >= 200){
            dosientos = parseInt(cantidad/200);
            cantidad = cantidad - dosientos * 200;
        }
        if (cantidad >= 100){
            cien = parseInt(cantidad/100);
            cantidad = cantidad - cien * 100;
        }
        if (cantidad >= 50){
            cincuenta = parseInt(cantidad/50);
            cantidad = cantidad - cincuenta * 50;
        }
        if (cantidad >= 20){
            mil = parseInt(cantidad/20);
            cantidad = cantidad - veinte * 20;
        }
    }
}


//funcion principal
function main(){
    totaldinero = totalMil + totalQuinientos 
    let inputValue = parseInt(document.getElementById("retiro").value);
    let comprobando = comprobacion(inputValue);
    
    if(retiro > totaldinero){
        alert("La cantidad que desea retirar excede el efectivo disponible, ingrese otra catidad");
    }
    if (comprobando == 1){
        alert("Tu retiro no es mutiplo de 50, vuelve a ingresar valor");
    }
    if(comprobando == 0){  
        calcular(inputValue);  
    }
}



//Declarar la cantidad de billetes 



var retiro = document.getElementById ("retiro").value;