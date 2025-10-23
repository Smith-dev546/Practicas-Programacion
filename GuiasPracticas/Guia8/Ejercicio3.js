// Función que procesa un array con una función
function procesarArray(numeros, funcion) {
    let resultado = [];
    for (let i = 0; i < numeros.length; i++) {
        resultado.push(funcion(numeros[i]));
    }
    return resultado;
}

// Funciones simples de procesamiento
function duplicar(num) {
    return num * 2;
}

function cuadrado(num) {
    return num * num;
}

function raiz(num) {
    return Math.sqrt(num);
}

// Uso
let misNumeros = [1, 4, 9, 16];

console.log("Original:", misNumeros);
console.log("Duplicado:", procesarArray(misNumeros, duplicar));
console.log("Cuadrado:", procesarArray(misNumeros, cuadrado));
console.log("Raíz:", procesarArray(misNumeros, raiz));