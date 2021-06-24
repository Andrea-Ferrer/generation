let nameInput = document.querySelector("#nameInput");

//evento
nameInput.addEventListener("keydown", function(event){
    console.log(nameInput.value);
});

//evento del boton
let button = document.querySelector("#button");
button.addEventListener("click", event => {
    let nameHeader = document.querySelector("#nameH");
    nameHeader.textContent =nameInput.value
    });