// Tipos de datos

/* 
javascript cuenta con dos familias de tipos de datos:
- Datos primitivos
- No primitivos o compuestos (estructuras de datos)
*/

// Datos primitivos
// - Numeros
let entero = 50;
let flotante = 1.57;
// - Booleanos
let verdadero = true;
let falso = false;
// - Cadenas o strings
let nombre = "Daniel Vázquez";
// - Nulos
let vacio = null;
// - Indefinidos
let indefinido = undefined;
// - Simbolo
let simbolo = Symbol();

console.log("--- Tipos de datos primitivos ---");
console.log(typeof(entero));
console.log(typeof(verdadero));
console.log(typeof(nombre));
console.log(typeof(vacio));
console.log(typeof(indefinido));
console.log(typeof(simbolo));

// Datos no primitivos o compuestos
// - Objetos
let persona = {
    nombre: "Daniel",
    edad: 46,
    casado: true
};
// - Arreglos o arrays
let numeros = [1, 2, 3, 4, 5];
let nombres = ["Daniel", "Paulo", "Ana"];
console.log("--- Tipos de datos no primitivos ---");
console.log(typeof(persona));
console.log(typeof(numeros));

// Concatenación de cadenas, unión de cadenas
let nombrePila = "Daniel";
let apellidoPaterno = "Vázquez";
let apellidoMaterno = "García";

// Concatenación tradicional
let nombreCompleto = nombrePila + " " + apellidoPaterno + " " + apellidoMaterno;
console.log(nombreCompleto);

// Concatenación con cadenas con formato
let nombreCompleto2 = `${nombrePila} ${apellidoPaterno} ${apellidoMaterno}`;
console.log(nombreCompleto2);