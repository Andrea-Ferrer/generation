let subtitle = document.querySelector("#subtitle");
let parrafo = document.querySelector("#parrafo")
console.log(subtitle);

subtitle.textContent = "nuevo  valor";//cambia o introduce el nuevo valor

//asignar una clase a un elemento de html con su id
subtitle.classList.add("red");

//sirve para remover la clase que se le asigno
//subtitle.classList.remove("red");

const animales = ["perro", "gato", "mapache", "pez", "leopardo", "raton", "zorro"];//arreglo
const list = document.querySelector("#list");

animales.push("Elefante");// agregar un elemento al final del arreglo

animales.forEach(animal =>{
    let item = document.createElement("li");//<li> </li>

    item.textContent = animal; // <li>Perro</li>

    list.appendChild(item);//agrega un elemento al html a la lista
});