/*
Predicción:
Invertido: ["estrella", "mar", "luna", "sol"]
find: "estrella"
*/

const palabras = ["sol", "luna", "mar", "estrella"];

palabras.reverse();

const encontrada = palabras.find(palabra => palabra.length > 3);

console.log("Invertido:", palabras);
console.log("Palabra encontrada:", encontrada);

// Análisis:
// Sin reverse(), find() habría encontrado "luna".
// reverse() modificó el array palabras y cambió su orden.
