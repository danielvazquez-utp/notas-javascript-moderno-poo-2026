// Promesas en Javascript
// Una promesa por definición hace referencia a una tarea asíncrona. Comúnmente, esto sucede cuando una aplicación requiere de un tercero para realizar alguna tarea.

import { getHeroeById } from "./basics/08-importacion-exportacion";

// Definición de una promesa
const promesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
        console.log("Han transcurrido 2 segundos");
        const heroe = getHeroeById(3);
        console.log( heroe );
    }, 2000);
});