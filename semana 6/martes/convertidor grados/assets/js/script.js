let button = document.querySelector("#calcular");

button.addEventListener("click", () =>{
    let datos = document.querySelector("#temperatura").value;
    //Farenheit
    let fahre = parseInt(datos)*1.8 + 32;
    //Kelvin
    let kelvin = parseInt(datos) + 273.15;


    let mostrar1 = document.querySelector("#fahre");
    let mostrar2 = document.querySelector("#kelvin");

    mostrar1.textContent = fahre;
    mostrar2.textContent = kelvin;


})