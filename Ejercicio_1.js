/*
Predicción: el resultado será [15, 24].
Primero multiplicamos los números por 3 y después
seleccionamos los mayores que 10.
*/

const numeros = [2, 5, 3, 8, 1];

const multiplicados = numeros.map(numero => numero * 3);
const mayores = multiplicados.filter(numero => numero > 10);

console.log("Original:", numeros);
console.log("Multiplicados:", multiplicados);
console.log("Mayores que 10:", mayores);

// Análisis:
// El array numeros no cambió porque map() y filter()
// crean nuevos arrays. Lo comprobé imprimiendo numeros.
