// Importación y exportación de recursos
// importando el archivo heroes.js en main

import owners, { heroes } from "../data/heroes";

// console.log( heroes );
// console.log( owners );

// Función que recupera un super heroe por identificador
export const getHeroeById = ( id ) => {
    return heroes.find( heroe => heroe.id == id );
}

// console.log(getHeroeById(5));
// console.log(getHeroeById(1));

// Ejercicio: Crea una función getOwnerByName que busque en el arreglo owners y devuelva el objeto cuando el nombre coincida

const getOwnerByName =  (name) => {
    return owners.find( owner => owner == name )
}

// Ejercicio: Crea una función getHeroesByOwner que busque a todos los super heroes de una franquicia

export const getHeroesByOwner = (owner) => {
    return heroes.filter( heroe => heroe.owner == owner )
}
// console.log( getHeroesByOwner('Marvel') );
// console.log( getHeroesByOwner('DC') );