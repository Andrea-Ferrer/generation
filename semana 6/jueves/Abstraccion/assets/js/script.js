/*
//encapsulamiento
"use strict"
//clase
class Pokemon {

    //al agregar # se hace privada
    #name = "";
    #type = "";
    #evolutions = [];

    constructor (name,type,evolutions){
        this.#name = name;
        this.#type = type;
        this.#evolutions = evolutions;

    }
    //set recibe valor, modificas el valor
    //get da valor, consultas el valor
    set name(value){
        this.#name = value;
    }
    set type (value){
        this.#type = value;
    }
    set evolutions (value){
        this.#evolutions = value;
    }

    get name (){
        return this.#name;
    }
    get type(){
        return this.#type;
    }
    get evolutions(){
        return this.#evolutions;
    }

    //ataque
    attack(){
        return `${this.#name}, esta atacando`;
    }


    evolve(evolution = 0){
        const EVOLVE = this.#evolutions[evolution] || "";
        let message = "No puedo evolucionar";

        if(EVOLVE){
            message = `${this.#name} esta evolucionando a ${EVOLVE}`;
            this.#name = EVOLVE;
        }
        return message;
    }
};

const charmander = new Pokemon("Charmander", "Fuego", ["Charmeleon", "Charizard"]);
const squirtle = new Pokemon("Squirtle", "Agua", ["Wartortle", "Blastoise"]);



console.log(charmander.name);
console.log(charmander.attack());
console.log(charmander.evolve());
console.log(charmander.attack());
console.log(charmander.evolve(1));
console.log(charmander.name);

charmander.name = "Pikachu";
console.log(charmander.name);
console.log(Pokemon);



//Abstraccion
const animales = ["Perros", "Gatos", "Lobos"];
animales.forEach(animal =>{
    console.log (animal);
})
*/

//Abstraccion
class Pokedex{
    getinfo (name){
        fetch(`https://workshop-mongo.herokuapp.com/pokemon/name/${name}`)
        .then(data => data.json())
        .then (data =>{

            //Desestructuracion de Pokedex
            console.log(data);
            const[DATA = null] = data;
            const MESSAGE = DATA ||`El pokemon ${name} no existe`;

            console.log(MESSAGE);
            console.log(MESSAGE.evolution);
        })
    }
};

const POKEDEX = new Pokedex();
POKEDEX.getinfo("charmander");

/*
//Desestructuracion de elementos de la lista ejemplo
const lista =["Dragon ball", "Jujutsu Kaisen", "Naruto"];
console.log(lista[1]);

const Dragon = lista [0];

const[dragon, code] = lista;
console.log(dragon, code);
*/