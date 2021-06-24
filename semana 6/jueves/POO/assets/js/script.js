
//clase
class Pokemon {

    name = "";
    type = "";
    evolutions = [];
//Se pueden declarar varios constructores donde acepten diferente cantidad de parametros y no te marque error el programa
/*
    constructor (){

    };

    constructor(name){
        this.name = name;
    };

    constructor(name, type){
        this.name = name;
        this.type = type;
    };
*/


    constructor (name,type,evolutions){
        this.name = name;
        this.type = type;
        this.evolutions = evolutions;

    }

    attack(){
        return `${this.name}, esta atacando`;
    }
    //Posiciones en e arreglo en este caso llamado evolutions, solo hay dos valores y comienza en 0. Ah evolution se le tiene que agregar un valor 0 para que no marque error
    evolve(evolution = 0){
        const EVOLVE = this.evolutions[evolution] || "";
        let message = "No puedo evolucionar";

        if(EVOLVE){
            message = `${this.name} esta evolucionando a ${EVOLVE}`;
            this.name = EVOLVE;
        }
        return message;
    }
};



//para agregar algo a la clase se one la palabra new
const charmander = new Pokemon("Charmander", "Fuego", ["Charmaleon", "Charizard"]);
/*
 charmander.evolve();
 charmander.evolve(1);
 */
console.log(charmander.name);
console.log(charmander.attack());
console.log(charmander.evolve());
console.log(charmander.attack());
console.log(charmander.evolve(1));
console.log(charmander.name);



/*
const bulbasur = new Pokemon();

const dito = new Pokemon("");

const 
*/
/* funcion es diferente a la clase
function Pokemon
*/