// Variables y constantes

/*
Una variable es un espacio de meria reservado que almacena un valor, este espacio de memoria tambièn tiene una clave asociada que permite recuperar el valor almacenado en este.
*/

// Tipos de varibles

// * Global, tienen acceso en todo contexto de la aplicación
var nombre = "Daniel";
var edad = 46;
var casado = true;

console.log(typeof(nombre));
console.log(typeof(edad));
console.log(typeof(casado));

// Modificación de una variable
nombre = "Paulo";
console.log(nombre);

var apellido = "Vazquez";
console.log(apellido);

// * Variable Local, existen en un contexto limitado
let soltero = false;
let estatura = 178;
// Modificación de una variable local
soltero = true;
console.log(soltero);

// Constantes, existen en ámbitos limitados pero son inmutables
const curp = "XXXWWW000111222";
//curp = "TTTYYYUUU7766";

// Contexto o scope
console.log(edad);
if (true){
    let edad = 30;
    console.log(edad);
}
console.log(edad);