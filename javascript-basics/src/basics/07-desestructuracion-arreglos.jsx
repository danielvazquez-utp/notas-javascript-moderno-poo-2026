// Desestructuración de arreglos

// La desestructuración de arreglos permite acceder a los datos almacenados en un colección como un objeto independiente. Para realizar la desestructuración es necesario definir los elementos a extraer usando el delimitador [] y considerar el orden de los elementos desestructurados.

// Ejemplo de arreglo
const superheroes = ['Batman', 'Ironman', 'Wonderwoman', 'Hulk'];
console.log(superheroes);

console.log(superheroes[0]);
const [ ,super2,, super4 ] = superheroes;

console.log(super4);
console.log(super2);

// Ejemplo de desestructuración en una función
const getElementos = () => ['ABCDE', '12345'];
console.log(getElementos());

const [ letras, numeros ] = getElementos();
console.log(letras, numeros);

// Otro ejemplo de desestructuración de valores y funciones en un arreglo
const _useState = ( valor ) => {
    return [valor, () => `El valor es ${ valor }`]
}

console.log(_useState('Ulises'));

// Ejercicio: Desestructura el arreglo que devuelve la función _useSate de la sig. manera:
// 1. El valor se desestructurará como la denominación "value"
// 2. La función se desestructurará con la denominación "getValue"
// 3. Prueba la función ya desestructurada

const [ value, getValue ] = _useState('Daniel');
console.log( value, getValue() );