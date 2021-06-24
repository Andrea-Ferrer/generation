function recibir() {
    let formulario=document.forms["formulario"];
    let x = formulario["payasos"];
    let y = formulario["munecas"];
    
    var payasos = x.value;
    var munecas = y.value;
    
    var peso_munecas = munecas*75;
    var peso_payasos = payasos*112;
    
    var peso_total = peso_munecas + peso_payasos;
    
    //numero de cajas de kilo
    
    var numero_kilo = peso_total/1000;
    console.log("peso total del paquete: ", numero_kilo); //peso
    
    var numero_sobrante = peso_total%1000;
    var numero_cajas=0
    
    if (numero_sobrante = 0){
        numero_cajas=numero_kilo
    }else{
        numero_cajas= parseInt(numero_kilo + 1);
    }
    console.log("el numero de cajas de a kilo es: ",numero_cajas);
    
    }