/*
Predicción:
Array a: mayor 9, every: true.
Array b: mayor 4, every: false.
*/

const a = [4, 9, 2, 7];
const b = [4, -1, 2];

const mayorA = a.reduce((mayor, numero) =>
    numero > mayor ? numero : mayor, 0);

const mayorB = b.reduce((mayor, numero) =>
    numero > mayor ? numero : mayor, 0);

const positivosA = a.every(numero => numero > 0);
const positivosB = b.every(numero => numero > 0);

console.log("a: mayor", mayorA, "every:", positivosA);
console.log("b: mayor", mayorB, "every:", positivosB);

// Análisis:
// Usé 0 como valor inicial de reduce() porque los dos
// arrays tienen números mayores que 0, excepto el -1.
// Así se puede comparar cada número para encontrar el mayor.
