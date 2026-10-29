/*
Predicción:
some: true
Ordenado: Pedro (15), Luis (17), Ana (25), Sara (31)
find: Ana, edad 25
*/

const personas = [
    { nombre: "Sara", edad: 31 },
    { nombre: "Luis", edad: 17 },
    { nombre: "Ana", edad: 25 },
    { nombre: "Pedro", edad: 15 }
];

const hayMenor = personas.some(persona => persona.edad < 18);

personas.sort((a, b) => a.edad - b.edad);

const personaEncontrada = personas.find(persona => persona.edad >= 18);

console.log("¿Hay menores de edad?:", hayMenor);
console.log("Personas ordenadas:", personas);
console.log("Primera persona mayor de edad:", personaEncontrada);

// Análisis:
// Si no ordenamos primero, find() devuelve a Sara,
// porque es la primera persona con edad igual o mayor a 18.
// El orden cambia el resultado porque find() devuelve
// el primer elemento que cumple la condición.
