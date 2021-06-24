//boton de animales
let button2 = document.querySelector("#animal"); // declaramos la variable button2
button2.addEventListener("click", event =>{
//Animales
const animales = ['Perro', 'Gato', 'Mapache', 'Pez', 'Leopardo', 'Raton', 'Zorro', 'Canguro', 'Camaleon', 'Conejo'];
const list2=document.querySelector('#listA');


animales.forEach(function(animales){ 
    let item2 = document.createElement('li');
    item2.textContent = animales;     
    list2.appendChild(item2);
});
})

//boton de personas
let button1 = document.querySelector("#person");
button1.addEventListener("click", event =>{
//Bootcamp
const personas = ['Andrea', 'Pedro', 'Ana', 'Yann', 'Felipe', 'Claudia', 'Rodrigo', 'Braulio', 'Jaquelin', 'Tamara'];
const list1=document.querySelector('#listP');

personas.forEach(function(person){ 
    let item1 = document.createElement('li');
    item1.textContent = person;     
    list1.appendChild(item1);
});
})


//boton de compus
let button = document.querySelector("#compus");
button.addEventListener("click", event =>{
   
//Compus
const computadoras = ['Dell', 'HP', 'Mac', 'Lenovo', 'MSI', 'Alienware', 'Toshiba', 'Samsung', 'Gateway', 'Asus'];
const list=document.querySelector('#listC');

computadoras.forEach(function(compus){ 
    let item = document.createElement('li');   
                                                
    item.textContent = compus;     
    list.appendChild(item);  
} );    

})