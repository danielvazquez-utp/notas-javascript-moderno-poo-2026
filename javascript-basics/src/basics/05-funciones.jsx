// Funciones

// Definción: Una función es un bloque de código reutilizable que realiza una tarea específica. De manera tradicional, se puede definir una función utilizando la palabra clave `function` seguida del nombre de la función y paréntesis (parámetros), y llaves (cuerpo de la función).

// Ejemplo de función tradicional
function saludar1(nombre) {
  return `Hola, ${nombre}!`;
}

// Llamada a la función
console.log(saludar1("Mundo")); // Output: Hola, Mundo!

// Error de mutación de una función
saludar1 = "La función a sido mutada"; // Esto no es recomendable, ya que puede causar errores en el código
console.log(saludar1); // Output: La función a sido mutada

// Defnición de una función como un objeto constante
const saludar2 = function (nombre) {
  return `Hola, ${nombre}!`;
}
// Llamada a la función
console.log(saludar2("Mundo")); // Output: Hola, Mundo!

// Intento de mutación de la función constante
// saludar2 = "La función a sido mutada"; // Esto generará un error, ya que no se puede reasignar una constante
// console.log(saludar2); // Output: Uncaught TypeError: Assignment to constant variable.

// Funciones Flecha
const saludar3 = (nombre) => {
  return `Hola, ${nombre}!`;
};

// Llamada a la función flecha
console.log(saludar3("Mundo")); // Output: Hola, Mundo!

console.log(saludar3); // Output: Hola, Mundo!

// Función flecha con una sola sentencia
const saludar4 = (nombre) => `Hola, ${nombre}!`;
// Llamada a la función flecha con una sola sentencia
console.log(saludar4("Mundo")); // Output: Hola, Mundo!

// Funciones que retornan objetos
const saludar5 = (nombre) => ({ mensaje: `Hola, ${nombre}!` });
// Llamada a la función que retorna un objeto
console.log(saludar5("Mundo")); // Output: { mensaje: 'Hola, Mundo!' }

// Ejercicio: Transforma la siguiente función a flecha y realiza una prueba
function getUsuario(id, name) {
    return {
        ide: id,
        nombre: name
    }
}

const getUser2 = (id,name) => ({id: id, name: name});
console.log(getUser2(1, 'Juan'));

const getUser3 = (id,name) => ({id, name});
console.log(getUser3(2, 'Maria'));