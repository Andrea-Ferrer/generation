//variables declaradas se declaran en cero para no tener problema
var ambiente = 0;
var humedad = 0;
var trabajadores = 0;
var liquido = 0;

//funcion recibir
function recibir(){
    let formulario = document.forms[`formulario`];

    var x = formulario[`ambiente`];
    var y = formulario[`humedad`];
    var z = formulario[`trabajadores`];
    var w = formulario[`liquido`];
    
    humedad = parseInt(y.value);
    ambiente = parseInt(x.value);
    trabajadores = parseInt(z.value);
    liquido = parseInt(w.value);

    console.log(ambiente,liquido,trabajadores,humedad);
}
function alerta (ambiente,liquido,trabajadores,humedad){
    if (ambiente <= 30 || ambiente >=90){
        alert("falla de temperatura");
    }

    if (humedad >= 50){
        alert("falla de temperatura");
    }
}