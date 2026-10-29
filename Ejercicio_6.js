/*
Predicción:
Sara será reemplazada por Camila.
Juan no existe, por lo que el array no cambiará.
*/

const nombres = ["Ana", "Luis", "Sara", "Pedro"];

let indice = nombres.indexOf("Sara");

if (indice !== -1) {
    nombres.fill("Camila", indice, indice + 1);
}

console.log("Usando fill():", nombres);

const indiceJuan = nombres.indexOf("Juan");

if (indiceJuan !== -1) {
    nombres.fill("Camila", indiceJuan, indiceJuan + 1);
}

console.log("Después de buscar Juan:", nombres);

// Ahora hacemos el reemplazo usando splice().
const nombres2 = ["Ana", "Luis", "Sara", "Pedro"];

const indiceSara = nombres2.indexOf("Sara");

if (indiceSara !== -1) {
    nombres2.splice(indiceSara, 1, "Camila");
}

console.log("Usando splice():", nombres2);

// Análisis:
// splice(-1, 1, "Camila") reemplaza el último elemento
// del array, porque el índice -1 señala el último elemento.
