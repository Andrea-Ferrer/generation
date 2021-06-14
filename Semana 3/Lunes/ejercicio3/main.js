/**Crear un objeto que se llame persona, el ejemplo debe tener 
un nombre, sus apellidos, edad y debe tener un método para saludar. Otro método donde diga su edad.
En consola imprimir el resultado de ambos métodos*/
let persona = {
    nombre:prompt('Ingresa tu nombre'),
    apellido: prompt('Ingresa tu apellido'),
    edad: prompt('Ingresa tu edad'),
saludo: function () {
    alert("Hola " + this.nombre + " " + this.apellido);
},
consulta: function () {
    alert("Tu edad es " + this.edad + "años");
},
};
/*function parametros (a,b,c){
    let datos ={
        a: persona.nombre,
        b: persona.apellido,
        c: persona.edad

    }
    return alert (this.datos);
}*/
/**Hacer una función donde le pasemos los parametros (nombre, apellidos, edad,)
 * esta funcion tendrá dentro un objeto
 * los datos que reciba la función llenarán el objeto.
 * La función debe retornar el objeto.
 */

/** Recuperaremos los datos de la API
en una etiqueta img mostrar la imagen

Documentación:
https://dog.ceo/dog-api/
https://docs.thecatapi.com/

Función general:
En una estructura HTML habrá un botón que diga “Elegir perro o Elegir gato”, al presionar el botón lanzará la petición y mostrará la imagen recopilada.
*/
