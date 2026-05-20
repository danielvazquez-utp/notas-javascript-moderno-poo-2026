// Objetos literales
// Estas delimitados por {}

// Ejemplo de un objeto: persona

const persona = {
    nombre: "Daniel",
    apellidoP: "Vázquez",
    apellidoM: "Mora",
    edad: 46,
    domicilio: {
        calle: "De las azucenas",
        colonia: "Gregorio Ramos",
        numeroExt: 1227,
        cp: 72340
    }
}
console.log(persona);

// Recuperando el contenido de los atributos del objeto persona
console.log(persona.nombre, persona.edad);
console.log(persona.domicilio.colonia);

// Modificar el contenido del objeto
persona.edad = 36;
console.log(persona.edad);

// Agregar nuevo atributo
persona.sexo = "Masculino";
console.log(persona.sexo);

// Eliminar un atributo
delete persona.apellidoM;
console.log(persona);

// Duplicando un objeto
const persona2 = persona; // Esto no es una copia, es una referencia al mismo objeto
console.log(persona2);

persona2.nombre = "Paulo";
console.log(persona); // Esto también cambia el nombre de persona, porque persona2 es una referencia al mismo objeto

// Para hacer una copia de un objeto, se puede usar el operador spread
const persona3 = {...persona}; // Esto es una copia del objeto persona
persona3.nombre = "Ana";
console.log(persona3);