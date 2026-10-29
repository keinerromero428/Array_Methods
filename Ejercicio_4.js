/*
Predicción:
Array combinado: [3, 7, 2, 10, 5]
Suma: 27
*/

const a = [3, 7, 2];
const b = [10, 5];

const combinado = a.concat(b);
const suma = combinado.reduce((acumulador, numero) => acumulador + numero, 0);

console.log("Array combinado:", combinado);
console.log("Suma:", suma);
console.log("Array a:", a);
console.log("Array b:", b);

// Análisis:
// concat() no modificó a ni b, porque devuelve
// un nuevo array con los elementos combinados.
