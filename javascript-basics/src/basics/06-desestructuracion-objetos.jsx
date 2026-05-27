// Desestructuración de objetos

// La desestructuración de objetos permite asociar la definición de un objeto a variables individuales, lo que facilita el acceso a sus propiedades. Esto se hace utilizando la sintaxis de llaves `{}` para extraer las propiedades del objeto y asignarlas a variables con el mismo nombre.

// Ejemplo de desestructuración de objetos
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
  domicilio: {
    calle: "Calle Mayor",
    numero: 123,
    colonia: "Centro",
    cp: 28013,
    pais: "México",
    geo: {
      lat: 40.4168,
      lng: -3.7038
    }
  }
};

console.log(persona);
console.log(persona.domicilio.geo.lat);
console.log(persona.domicilio.geo.lng);

// Desestructuración de objetos anidados

// Para desestructurar objetos anidados, se puede utilizar la misma sintaxis de llaves `{}` para acceder a las propiedades internas del objeto. Esto permite extraer valores específicos de objetos que contienen otros objetos como propiedades.

// Ejemplo de desestructuración de objetos anidados
const { nombre: nombrePersona, edad } = persona;
const { lat, lng } = persona.domicilio.geo;
console.log(nombrePersona, edad);
console.log(lat, lng);

// Variable local que coincide con el nombre de una propiedad del objeto

const nombre = "María";