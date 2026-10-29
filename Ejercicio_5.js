/*
Predicción:
shift devuelve 10.
unshift devuelve 4.
push devuelve 5.
El array final será [5, 20, 30, 40, 50].
*/

const numeros = [10, 20, 30, 40];

const eliminado = numeros.shift();
console.log("shift devuelve:", eliminado);

const longitudInicio = numeros.unshift(5);
console.log("unshift devuelve:", longitudInicio);

const longitudFinal = numeros.push(50);
console.log("push devuelve:", longitudFinal);

console.log("Array final:", numeros);

// Análisis:
// unshift() y push() devuelven la nueva longitud
// del array, no el array completo.
