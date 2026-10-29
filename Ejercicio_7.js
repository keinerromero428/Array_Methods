/*
Predicción:
El resultado será "manzana, pera, uva".
*/

const frutas = ["manzana", "kiwi", "pera", "uva"];

const frutasConA = frutas.filter(fruta => fruta.includes("a"));
const resultado = frutasConA.join(", ");

console.log("Frutas con la letra a:", frutasConA);
console.log("Resultado:", resultado);

// Análisis:
// No podemos hacer primero join() y después filter(),
// porque join() convierte el array en un string.
// filter() se utiliza para filtrar elementos de un array.
